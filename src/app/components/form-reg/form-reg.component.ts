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
  private statusReg: number;


  constructor(private router: Router, private httpService: HttpService, private cookieService:CookieService) { }

  ngOnInit() {

  }


  sendTestData(){
    this.httpService.test().subscribe((data:Response)=>{
      console.log(data.body)
    })
  }

  sendData() {
    this.user = new User(this.login, this.password, this.email);
    this.httpService.setUser(this.user);

    this.httpService.regUser()
      .subscribe(
        (data:Response, )=>{
          console.log(data.status);
          data.status === 201 ? this.httpService.reg = true : false;
          this.httpService.authUser().subscribe((data:Response)=>{
              this.httpService.access_token = data.headers.get('access-token');
              this.httpService.refresh_token = data.headers.get('refresh-token');
              if( data.status === 200){
                alert('Вы были успешно зарегестрированы!');
                this.router.navigate(['/reg/settings'])
              }else {
                alert('Ошибка ! Повторите попытку позднее')
              }
            },
            onerror=>{
              alert('Ошибка регистрации! Повторите попытку позднее')
            })
         },
        onerror=>{
          alert("Ошибка регистрации! Пользователь с таким login и email уже существует!")
        }
    );

  }



}
