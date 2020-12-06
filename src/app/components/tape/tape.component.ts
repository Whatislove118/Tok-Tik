import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../../HttpService';
import {Router} from '@angular/router';
import {User} from '../../../user';

@Component({
  selector: 'app-tape',
  templateUrl: './tape.component.html',
  styleUrls: ['./tape.component.css']
})
export class TapeComponent implements OnInit {
  @ViewChild('videoElement', {static: false}) video: ElementRef;
  @ViewChild('gg', {static: false}) img: ElementRef;
  flag : boolean  = false;
  // user: User = this.httpService.getUser();
  constructor(private httpService: HttpService, private router:Router) { }

  ngOnInit() {
    // this.httpService.reg = true;
  }
  //stop on click
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
