import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {HttpService} from '../../../HttpService';
import {Router} from '@angular/router';
import {User} from '../../../user';
import {ShareLinkComponent} from '../share-link/share-link.component';

// @NgModule({
//   providers: [
//   { provide: 'slick', useValue: window['slick']() }
// ]})

@Component({
  selector: 'app-tape',
  templateUrl: './tape.component.html',
  styleUrls: ['./tape.component.css']
})
export class TapeComponent implements OnInit {
  @ViewChild('videoElement', {static: false}) video: ElementRef;
  @ViewChild('pause', {static: false}) img: ElementRef;
  @ViewChild('skipVideo', {static: false}) div: ElementRef;
  @ViewChild('video', {static: false}) source: ElementRef;
  @ViewChild('link', {static: false}) link: ElementRef;
  @ViewChild(ShareLinkComponent, {static: false}) shareComponent: ShareLinkComponent;
  flag : boolean  = true;
  num : number = 0;
  pauseIconSrc: string = 'https://se.ifmo.ru/~s263069/Isbd/pause-icon.png';
  playIconSrc: string = 'https://se.ifmo.ru/~s263069/Isbd/play-icon.png';
  shareLink: string = 'http://localhost:4200/#/tape';
  // user: User = this.httpService.getUser();
  vid = ["https://2ch.hk/b/src/234971472/16074516977990.mp4", "https://2ch.hk/b/src/234971472/16074511849440.mp4", "https://2ch.hk/b/src/234971472/16074512777210.mp4"];
  constructor(private httpService: HttpService, private router:Router) {

  }

  ngOnInit() {
    // this.httpService.reg = true;
  }
  ngAfterViewInit() {
    this.video.nativeElement.src = this.vid[this.num];
  }
   next(){
    this.num++;
    this.video.nativeElement.src = this.vid[this.num];
   }
   back(){
    this.num--;
    this.video.nativeElement.src = this.vid[this.num];
   }
  goToComments(){
    this.router.navigate(['video/comments'])

  }
  goToMusic(){
    this.router.navigate(['video/music'])
  }
  shareVideo(){
   // this.shareComponent.shareVideo();

      this.link.nativeElement.style.zIndex = "2"
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
