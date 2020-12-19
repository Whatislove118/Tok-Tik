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
  two_step_verification: boolean;
  first_routing: boolean = true;
  constructor(private deviceService: DeviceDetectorService,private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    console.log(this.user);
    this.user.profile_settings.check_devices(this.deviceService.getDeviceInfo().device);
    this.check_first_routing();
    console.log(this.first_routing);
  }

  check_first_routing(){
    if(this.router.url!='/reg/settings/security'){
      this.first_routing = false;
    }
  }

  submit_changes(){
    alert('Настройки были изменены')
  }

  skip_security_settings(){
    this.router.navigate(['profile'])
  }

  next(){
    this.httpService.getUser().profile_settings.set_security_settings(this.two_step_verification);
    this.httpService.sendSecurity().subscribe((data: Response) => {
        console.log('Changes good')
      }, onerror =>{
        console.log('shahid');
        return
      }
    );
    if (this.first_routing != true){
      this.router.navigate(['profile/settings'])
    }else {
      this.router.navigate(['profile'])
    }
  }
}

