import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../HttpService';
import {Router} from '@angular/router';
import {User} from '../../../user';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = this.httpService.getUser();
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.httpService.reg = true;
  }



}
