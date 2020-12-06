import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../HttpService';
import {Router} from '@angular/router';



@Component({
  selector: 'app-tape',
  templateUrl: './tape.component.html',
  styleUrls: ['./tape.component.css']
})
export class TapeComponent implements OnInit {

  constructor(private httpService: HttpService, private router:Router) { }

  ngOnInit() {

  }




}
