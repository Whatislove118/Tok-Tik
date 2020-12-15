export class Wrapper_profile_settings{
  username: string;
  push_notifications: boolean;

  constructor(username: string, push_notifications: boolean){
    this.username = username;
    this.push_notifications = push_notifications;
  }
}
