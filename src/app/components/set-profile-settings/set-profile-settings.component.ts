import { Component, OnInit } from '@angular/core';
import {User} from '../../../user';
import {HttpService} from '../../../HttpService';
import {Router} from '@angular/router';


@Component({
  selector: 'app-set-profile-settings',
  templateUrl: './set-profile-settings.component.html',
  styleUrls: ['./set-profile-settings.component.css']
})
export class SetProfileSettingsComponent implements OnInit {
  private user: User = this.httpService.getUser();
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    console.log(this.user);
  }

  next(){
    this.router.navigate(['reg/settings/profile'])
  }

}
