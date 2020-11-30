import {Injectable} from '@angular/core';

@Injectable()
export class Profile_settings{
  username: string;
  push_notifications: boolean = true;
  avatar: File;

  private_account: boolean = false;
  allow_download_video: boolean = true;
  comments_filter: boolean = true;
  allow_private_messages: string = 'all';
  allow_likes_list_looking: string = 'all';

  two_step_verification: boolean = false;
  your_device: Array<string> = new Array();

  constructor() {

  }

  set_profile_settings(username: string, push_notifications: boolean, avatar: File) {
    this.username = username;
    this.push_notifications = push_notifications;
    this.avatar = avatar;
  }

  set_confident_settings(private_account: boolean, allow_download_video: boolean,
                         comments_filter: boolean,allow_private_messages: string,
                         allow_likes_list_looking: string){

    this.private_account = private_account;
    this.allow_download_video = allow_download_video;
    this.comments_filter = comments_filter;
    this.allow_private_messages = allow_private_messages;
    this.allow_likes_list_looking = allow_likes_list_looking;

  }

  set_security_settings(two_step_verification: boolean){
    this.two_step_verification = two_step_verification;

  }


  check_devices(device:string){
    if (this.your_device.indexOf(device)==-1){
      console.log(1);
        this.your_device.push(device)
    }
  }
}
