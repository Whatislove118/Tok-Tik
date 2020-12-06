import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../../HttpService';
import {Router} from '@angular/router';



@Component({
  selector: 'app-tape',
  templateUrl: './tape.component.html',
  styleUrls: ['./tape.component.css']
})
export class TapeComponent implements OnInit {
  @ViewChild('videoElement', {static: false}) video: ElementRef;
  constructor(private httpService: HttpService, private router:Router) { }

  ngOnInit() {

  }
  //stop on click
  playOrStopVideo(){
    this.video.nativeElement.play();
    //this.video.nativeElement.pause();

  }




}
