import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../HttpService';
import {Router} from '@angular/router';
import {User} from '../../../user';
import {isBoolean} from 'util';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  user: User = this.httpService.getUser();
  username: string;
  push_notification: string;
  avatar: File;
  first_routing: boolean = true;


  constructor(private router: Router, private httpService: HttpService) { }


  check_first_routing(){
    if(this.router.url!='/reg/settings/profile'){
      this.first_routing = false;
    }
  }

  ngOnInit() {
    console.log(this.user)
    this.check_first_routing()
    console.log(this.first_routing)
  }

  skip_profile_settings(){
    this.router.navigate(['reg/settings/confident'])
  }
  next() {
    this.user.profile_settings.set_profile_settings(this.username, Boolean(this.push_notification), this.avatar);
    this.router.navigate(['reg/settings/confident'])
  }
}
