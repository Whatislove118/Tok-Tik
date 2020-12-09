import { Component, OnInit } from '@angular/core';
import {User} from '../../../user'
import { Router } from '@angular/router';
import {HttpService} from '../../../HttpService';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-form-reg',
  templateUrl: './form-reg.component.html',
  styleUrls: ['./form-reg.component.css']
})
export class FormRegComponent implements OnInit {
  user : User;
  login:string = "";
  password:string="";
  email:string="";


  constructor(private router: Router, private httpService: HttpService, private cookieService:CookieService) { }

  ngOnInit() {

  }

  sendData() {
    this.user = new User(this.login, this.password, this.email);
    this.httpService.setUser(this.user);
    console.log(this.httpService.regUser(this.user)
      .subscribe(
        data=>{

          //this.router.navigate(['reg/settings']);
         },
        onerror=>{
          alert("Ошибка регистрации! Повторите попытку позднее")
        }
    ));

  }



}
