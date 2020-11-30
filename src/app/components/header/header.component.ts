import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../HttpService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header_on_profile = false;
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.check_pos_header();
  }


  check_pos_header(){
    if(this.router.url=='/profile' || this.router.url == '/profile/.'){
      this.header_on_profile = true;
    }
  }
}
