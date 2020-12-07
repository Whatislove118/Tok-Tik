import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../../HttpService';
import {Router} from '@angular/router';
import {User} from '../../../user';
import {ShareLinkComponent} from '../share-link/share-link.component';

@Component({
  selector: 'app-tape',
  templateUrl: './tape.component.html',
  styleUrls: ['./tape.component.css']
})
export class TapeComponent implements OnInit {
  @ViewChild('videoElement', {static: false}) video: ElementRef;
  @ViewChild('pause', {static: false}) img: ElementRef;
  @ViewChild(ShareLinkComponent, {static: false}) shareComponent: ShareLinkComponent;
  flag : boolean  = true;
  pauseIconSrc: string = 'https://se.ifmo.ru/~s263069/Isbd/pause-icon.png';
  playIconSrc: string = 'https://se.ifmo.ru/~s263069/Isbd/play-icon.png';
  shareLink: string = 'http://localhost:4200/#/tape';
  // user: User = this.httpService.getUser();
  constructor(private httpService: HttpService, private router:Router) { }

  ngOnInit() {
    // this.httpService.reg = true;
  }

  goToComments(){
    this.router.navigate(['video/comments'])
  }

  goToMusic(){
    this.router.navigate(['video/music'])
  }
  shareVideo(){
   this.shareComponent.shareVideo();
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
