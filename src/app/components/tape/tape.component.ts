import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {HttpService} from '../../../HttpService';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../user';
import {ShareLinkComponent} from '../share-link/share-link.component';
import {Video} from '../../../Video';

// @NgModule({
//   providers: [
//   { provide: 'slick', useValue: window['slick']() }
// ]})

@Component({
  selector: 'app-tape',
  templateUrl: './tape.component.html',
  styleUrls: ['./tape.component.css']
})
export class TapeComponent implements OnInit, AfterViewInit {
  @ViewChild('videoElement', {static: false}) video: ElementRef;
  @ViewChild('pause', {static: false}) img: ElementRef;
  @ViewChild('skipVideo', {static: false}) div: ElementRef;
  @ViewChild('video', {static: false}) source: ElementRef;
  @ViewChild('link', {static: false}) link: ElementRef;
  @ViewChild('likes', {static: false}) likes: ElementRef;
  @ViewChild('owner_username', {static: false}) owner_username: ElementRef;
  @ViewChild('description', {static: false}) description: ElementRef;
  @ViewChild(ShareLinkComponent, {static: false}) shareComponent: ShareLinkComponent;
  @ViewChild('hashtags', {static: false}) hashtags: ElementRef;
  flag : boolean  = true;
  num : number = 0;
  all_videos: Array<Video> = new Array<Video>();
  pauseIconSrc: string = 'https://se.ifmo.ru/~s263069/Isbd/pause-icon.png';
  playIconSrc: string = 'https://se.ifmo.ru/~s263069/Isbd/play-icon.png';
  shareLink: string = 'http://localhost:4200/#/tape';
  // user: User = this.httpService.getUser();
  current_video: Video;
  constructor(private httpService: HttpService, private router:Router,private activatedRouter: ActivatedRoute) {

  }

   ngOnInit() {

  }
  ngAfterViewInit() {
    this.current_video = new Video('', 0, null, '', null, null, '');
    // this.httpService.reg = true;
    this.httpService.getAllVideosA().subscribe((data: Response) => {
      let res = JSON.parse(JSON.stringify(data.body));

      for (let i in res) {
        let video = new Video(res[i]['url'], res[i]['likes'], res[i]['id'],
          res[i]['description'], res[i]['hashtags'], res[i]['user_id'], res[i]['username']);
        console.log(video);
        let count_current = this.all_videos.push(video)-1;
        console.log(video.id);
        console.log(Number(this.activatedRouter.snapshot.paramMap.get('id')));
        if (video.id == Number(this.activatedRouter.snapshot.paramMap.get('id'))){
          this.num = count_current;
          console.log(count_current)
        }

      }
      this.current_video = this.all_videos[this.num];
      this.video.nativeElement.src = 'http://localhost:8000' + this.current_video.url;
      this.owner_username.nativeElement.innerText = this.current_video.owner_username;
      this.description.nativeElement.innerText = this.current_video.description;
      this.likes.nativeElement.innerText = this.current_video.likes;
      this.hashtags.nativeElement.innerText = this.current_video.hash_tags;
    });
    console.log(this.current_video.hash_tags);
  }

  goToUserProfile(){
    this.router.navigate(['profile', this.current_video.user_id])
  }

   next(){
    this.num++;
    if(this.num>this.all_videos.length-1){
      console.log(this.num);
      console.log(this.all_videos[this.num]);
      this.num = 0;
    }
    this.video.nativeElement.src = 'http://localhost:8000'+this.all_videos[this.num].url;
     this.current_video = this.all_videos[this.num];
     this.owner_username.nativeElement.innerText = this.current_video.owner_username;
     this.description.nativeElement.innerText = this.current_video.description;
     this.likes.nativeElement.innerText = this.current_video.likes;
     this.hashtags.nativeElement.innerText = this.current_video.hash_tags;
   }
   back(){
    this.num--;
    if(this.num<0){
      this.num = this.all_videos.length-1;
      console.log(this.num);
      console.log(this.all_videos[this.num]);
    }
    this.video.nativeElement.src = 'http://localhost:8000'+this.all_videos[this.num].url;
     this.current_video = this.all_videos[this.num];
     this.owner_username.nativeElement.innerText = this.current_video.owner_username;
     this.description.nativeElement.innerText = this.current_video.description;
     this.likes.nativeElement.innerText = this.current_video.likes;
     this.hashtags.nativeElement.innerText = this.current_video.hash_tags;
   }
  goToComments(){
    this.router.navigate(['video/comments', this.current_video.id])

  }
  goToMusic(){
    this.router.navigate(['video/music/', this.current_video.id])
  }
  shareVideo(){
   // this.shareComponent.shareVideo();

      this.link.nativeElement.style.zIndex = "2"
  }
  likeVideo(){
    this.httpService.likeVideo(this.current_video.id).subscribe( (data: Response) => {
      let res = JSON.parse(JSON.stringify(data.body));
      this.likes.nativeElement.innerText = res['likes'];
      this.current_video.likes = Number(res['likes']);
      alert('Like')
    })

  }
  hide(){
    this.link.nativeElement.style.zIndex = "-1"
  }

  playOrStopVideo() {
    switch (this.flag) {
      case (this.flag = false): {
        this.video.nativeElement.play();
        this.flag = true;
        this.img.nativeElement.style.zIndex = "-1";
        break;
      } case (this.flag = true): {
        this.video.nativeElement.pause();
        this.flag = false;
        this.img.nativeElement.style.zIndex = "1";
        break;
      }
    }
  }




}
