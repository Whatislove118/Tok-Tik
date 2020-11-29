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
    console.log(this.user);
    this.httpService.setUser(this.user);
    this.router.navigate(['reg/settings'])
    // this.httpService.sendRegData(this.user).subscribe();
  }



}
