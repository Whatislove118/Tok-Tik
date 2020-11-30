import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';
import {User} from '../../../user';
import {HttpService} from '../../../HttpService';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  user: User = this.httpService.getUser();
  two_step_verification: string;
  your_devices: string[] = [];
  constructor(private deviceService: DeviceDetectorService,private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.user.profile_settings.check_devices(this.deviceService.getDeviceInfo().device);
  }


  skip_security_settings(){
    this.router.navigate(['profile'])
  }

  next(){
    this.router.navigate(['profile'])
  }
}
