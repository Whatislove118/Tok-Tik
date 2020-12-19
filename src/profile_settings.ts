import {Injectable} from '@angular/core';
import {Avatar} from './Avatar';
import {Confident} from './Confident';
import {Security} from './Security';
import {Wrapper_profile_settings} from './wrapper_profile_settings';


@Injectable()
export class Profile_settings{
  username: string;
  push_notifications: boolean = true;
  avatar: Avatar = new Avatar(null);
  wrap_profile_settings: Wrapper_profile_settings = null;
  confident: Confident = new Confident();

  security: Security = new Security();


  constructor() {

  }

  set_profile_settings(username: string, push_notifications: boolean, avatar: Avatar) {
    this.username = username;
    this.push_notifications = push_notifications;
    this.avatar = avatar;
  }

  set_confident_settings(private_account: boolean, allow_download_video: boolean,
                         comments_filter: boolean,allow_private_message: string,
                         allow_likes_list_looking: string){

    this.confident.private_account = private_account;
    this.confident.allow_download_video = allow_download_video;
    this.confident.comments_filter = comments_filter;
    this.confident.allow_private_message = allow_private_message;
    this.confident.allow_likes_list_looking = allow_likes_list_looking;

  }

  set_security_settings(two_step_verification: boolean){
    this.security.two_step_verification = two_step_verification;

  }


  check_devices(device:string){
    if (this.security.your_device.indexOf(device)==-1){
      console.log(1);
        this.security.your_device.push(device)
    }
  }

  getWrapper(){
    this.wrap_profile_settings = new Wrapper_profile_settings(this.username, this.push_notifications);
    return this.wrap_profile_settings;
  }
}
