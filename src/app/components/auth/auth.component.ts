import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User} from '../../../user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  navigateToAuthReg(number : number){
    // code 1 - auth
    if ( number == 1){
      this.router.navigate(['auth']);
    }//code 2 - reg
    else {
      this.router.navigate(['reg'])
    }

  }

}
