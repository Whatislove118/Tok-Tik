import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../../HttpService';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../user';
import {DeviceDetectorService} from 'ngx-device-detector';
import {User_statistics} from '../../../user_statistics';
import {viewClassName} from '@angular/compiler';
import {Video} from '../../../Video';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('video', {static: false} ) video: ElementRef;
  @ViewChild('pause', {static: false}) img: ElementRef;
  user: User = this.httpService.getUser();
  add_video: File;
  videos: Array<Video> = new Array();
  vide_url_pattern = 'http://localhost:8000';
  main_profile: boolean = true;
  another_user: number;
  flag : boolean  = true;
  constructor(private httpService: HttpService, private router: Router,private activatedRouter: ActivatedRoute) {

  }

  ngOnInit() {
    this.another_user = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    console.log(this.httpService.access_token);
    this.httpService.reg = true;
    if (this.another_user != 0 && this.another_user != this.httpService.user_id){
      this.main_profile = false;
    }else{
      this.main_profile = true;
    }
    this.httpService.getUserProfile(this.another_user).subscribe((data:Response) =>{
      let res = JSON.parse(JSON.stringify(data.body));
      this.httpService.getUser().profile_settings.avatar.url = 'http://localhost:8000';
      this.httpService.getUser().profile_settings.avatar.url += res['avatar_url'];
      this.httpService.getUser().login = res['profile_settings']['username'];
      this.httpService.getUser().user_statistics = new User_statistics(Number(res['user_statistics']['count_followers']),
        Number(res['user_statistics']['amount_videos']), Number(res['user_statistics']['likes_on_videos']));
      console.log(this.httpService.getUser());
    }, onerror =>{
      alert('Error')
    });

    this.getUserVideos(this.another_user);


  }

  follow(){
    this.httpService.follow(this.another_user).subscribe( (data: Response) =>{
      alert('Вы подписались!')
    })
  }

  addVideo(){
    this.router.navigate(['video/add'])

  }

  getUserVideos(id:number){
    this.httpService.getUserVideos(id).subscribe( (data: Response) =>{
      console.log(JSON.parse(JSON.stringify(data.body)));
      let res = JSON.parse(JSON.stringify(data.body));
      for (let i in res) {
          let video = new Video('http://localhost:8000'+res[i]['url'], null, res[i]['id'],
            null, null, null, null);
          this.videos.push(video);
          console.log(this.videos);
        }
      console.log(this.videos)
    }, onerror =>{
      alert('error')
    })
  }


  goToVideoInTape(video_url: string){
    for (let i=0; i<this.videos.length;i++){
      if(video_url === this.videos[i].url){
        this.router.navigate(['tape/', this.videos[i].id])
      }
    }
  }

}
