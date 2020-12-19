import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../../HttpService';
import {User} from '../../../user';

@Component({
  selector: 'app-confident',
  templateUrl: './confident.component.html',
  styleUrls: ['./confident.component.css']
})
export class ConfidentComponent implements OnInit {
  user: User = this.httpService.getUser();
  private_account: boolean;
  allow_download_video: boolean;
  comments_filter: boolean;
  allow_private_message: string;
  allow_likes_list_looking: string;
  first_routing: boolean = true;
  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.check_first_routing();
    console.log(this.first_routing)
  }

  submit_changes(){
    alert('Настройки были изменены')
  }

  check_first_routing(){
    if(this.router.url!='/reg/settings/confident'){
      this.first_routing = false;
    }
  }
  skip_confident_settings(){
    this.router.navigate(['reg/settings/security'])
  }

  next() {
    this.user.profile_settings.set_confident_settings(this.private_account,this.allow_download_video,
                                                      this.comments_filter, this.allow_private_message,
                                                      this.allow_likes_list_looking);
    this.httpService.sendConfidentiality().subscribe((data: Response) => {
        console.log('Changes good')
      }, onerror =>{
        console.log('shahid');
        return
      }
    );
    if (this.first_routing != true){
      this.router.navigate(['profile/settings'])
    }else {
      this.router.navigate(['reg/settings/security'])
    }
  }
}
