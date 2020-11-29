import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confident',
  templateUrl: './confident.component.html',
  styleUrls: ['./confident.component.css']
})
export class ConfidentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.router.navigate(['reg/settings/security'])
  }
}
