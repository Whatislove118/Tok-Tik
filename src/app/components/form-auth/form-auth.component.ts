import { Component, OnInit } from '@angular/core';
import {User} from '../../../user';
import {HttpService} from '../../../HttpService';
import {Router} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';
import {Profile_settings} from '../../../profile_settings';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.css']
})
export class FormAuthComponent implements OnInit {
  user: User;
  login: string;
  password: string;


  constructor(private httpService: HttpService, private router: Router, private deviceService: DeviceDetectorService) { }

  ngOnInit(){

  }

  sendData(){
    this.user = new User(this.login, this.password, null);
    this.user.profile_settings = new Profile_settings();
    this.user.profile_settings.check_devices(this.deviceService.getDeviceInfo().device);
    this.router.navigate(['profile']);
  }

}
