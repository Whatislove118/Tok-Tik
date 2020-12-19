import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../HttpService';
import {ActivatedRoute, Router} from '@angular/router';
import {Video} from '../../../Video';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  videos: Array<Video> = new Array();
  hashtags: string;
  constructor(private httpService: HttpService, private router: Router,private activatedRouter: ActivatedRoute) {

  }

  ngOnInit() {
  }

  searchVideosWithHashtags(){
    this.videos = new Array<Video>();
      this.httpService.getVideoWithHashtags(this.hashtags).subscribe( (data:Response) =>{
        console.log('video with hashtags');
        let res = JSON.parse(JSON.stringify(data.body));
        for (let i in res) {
          let video = new Video('http://localhost:8000'+res[i]['url'], null, res[i]['id'],
            null, null, null, null);
          this.videos.push(video);
          console.log(this.videos);
        }
      })
  }

  goToVideoInTape(video_url:string){
    for (let i=0; i<this.videos.length;i++){
      if(video_url === this.videos[i].url){
        this.router.navigate(['tape/', this.videos[i].id])
      }
    }
  }

}
