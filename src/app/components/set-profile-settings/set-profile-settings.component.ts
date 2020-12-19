import { Component, OnInit } from '@angular/core';
import {User} from '../../../user';
import {HttpService} from '../../../HttpService';
import {Router} from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import {Profile_settings} from '../../../profile_settings';


@Component({
  selector: 'app-set-profile-settings',
  templateUrl: './set-profile-settings.component.html',
  styleUrls: ['./set-profile-settings.component.css']
})

export class SetProfileSettingsComponent implements OnInit {
  private user: User = this.httpService.getUser();


  constructor(private httpService: HttpService, private router: Router) {
  }

  ngOnInit() {
    console.log(this.user);
    this.user.profile_settings= new Profile_settings();

  }


  skip_settings(){
    console.log(JSON.stringify(this.user.profile_settings));
    console.log(JSON.stringify(this.httpService.getUser().profile_settings));
    this.httpService.skipProfileSettings().subscribe((data:Response)=>{
      let url = JSON.parse(JSON.stringify(data.body));
      console.log(JSON.parse(JSON.stringify(data.body)));
      this.httpService.parseUrl(url);
      this.router.navigate(['profile'])
      }, onerror => {
        alert('bad');
        return
      }
    );
  }

  next(){

    this.router.navigate(['reg/settings/profile'])
  }

}
