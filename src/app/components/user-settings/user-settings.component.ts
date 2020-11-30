import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../../HttpService';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
  }

  go_to_profile_settings(){
    this.router.navigate(['profile/settings/set_profile']);
  }

  go_to_profile_confident(){
    this.router.navigate(['profile/settings/set_confident']);
  }

  go_to_profile_security(){
    this.router.navigate(['profile/settings/set_security']);
  }

}
