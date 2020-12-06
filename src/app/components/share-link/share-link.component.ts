import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../../HttpService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-share-link',
  templateUrl: './share-link.component.html',
  styleUrls: ['./share-link.component.css']
})
export class ShareLinkComponent implements OnInit {
  shareLink: string = 'http://localhost:4200/#/tape';
  @ViewChild('sharelinkbutton', {static: false}) shareButton: ElementRef;
  constructor(private httpService: HttpService, private router:Router) { }

  ngOnInit() {
  }

  shareVideo(){
    console.log(1);
    this.shareButton.nativeElement.click();
  }

}
