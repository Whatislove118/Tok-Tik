import { Component, OnInit } from '@angular/core';
import {User} from '../../../user'
import { Router } from '@angular/router';
import {HttpService} from '../../../HttpService';

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


  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {

  }

  sendData() {
    this.user = new User(this.login, this.password, this.email);
    this.httpService.setUser(this.user);
    console.log(this.httpService.regUser(this.user)
      .subscribe(
        data=>{
          alert("Вы были успешны зарегестрированы!");
          this.router.navigate(['reg/settings']);
         },
        onerror=>{
          alert("Ошибка регистрации! Повторите попытку позднее")
        }
    ));

  }



}
