import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../HttpService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  go_to_profile_settings(){
    this.router.navigate(['profile/settings']);
  }

  go_to_profile(){
    this.router.navigate(['profile']);
  }

  go_to_search(){
    this.router.navigate(['search']);
  }

  go_to_tape(){
    this.router.navigate(['tape']);
  }
}
