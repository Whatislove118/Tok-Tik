import {Profile_settings} from './profile_settings';
import {User_statistics} from './user_statistics';


export class User {
  login: string;
  email: string;
  password: string;
  profile_settings: Profile_settings;
  user_statistics: User_statistics = new User_statistics(1,1,1,);

  constructor(login: string, password: string, email: string) {
    this.login = login;
    this.password = password;
    this.email = email;
  }

}

