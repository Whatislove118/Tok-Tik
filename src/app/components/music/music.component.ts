import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {HttpService} from '../../../HttpService';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Video} from '../../../Video';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit, AfterViewInit {
  @ViewChild('author', {static: false}) author_name: ElementRef;
  @ViewChild('audioname', {static: false}) audio_name: ElementRef;
  videos: Array<Video> = new Array();
  video_id: number;
  constructor(private httpService: HttpService, private router: Router, private activatedRouter: ActivatedRoute) {

  }

  ngOnInit() {
    this.video_id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    console.log(this.video_id);
    this.httpService.getAudio(this.video_id).subscribe( (data:Response) =>{
      alert('Audio');
      let res = JSON.parse(JSON.stringify(data.body));
      this.author_name.nativeElement.innerText = res[0]['author_name'];
      this.audio_name.nativeElement.innerText = res[0]['audio_name'];
      for (let i in res) {
        if(res[i]['url']===undefined){
          console.log(1);
          continue
        }
        let video = new Video('http://localhost:8000'+res[i]['url'], null, res[i]['id'],
          null, null, null, null);
        this.videos.push(video);
        console.log(this.videos);
      }
    })
  }

  ngAfterViewInit(){

  }

  goToVideoInTape(video_url: string){
    for (let i=0; i<this.videos.length;i++){
      console.log(i);
      console.log(video_url);
      console.log(this.videos[i].url);
        if(video_url === this.videos[i].url){
          this.router.navigate(['tape/', this.videos[i].id])
        }
    }
  }



}
