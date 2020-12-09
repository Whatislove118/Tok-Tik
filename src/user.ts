import {Profile_settings} from './profile_settings';


export class User {
  login: string;
  email: string;
  password: string;
  profile_settings: Profile_settings;

  constructor(username: string, password: string, email: string) {
    this.login = username;
    this.password = password;
    this.email = email;
  }

}

