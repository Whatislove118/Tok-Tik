import {Injectable} from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class HttpService{
  private user:User;
  reg: boolean = false;
  url: string = "http://127.0.0.1:8000/auth/reg/";

  constructor(private http: HttpClient){}

  sendRegData(user: User) : Observable<any>{
    return this.http.post(this.url, {user: user})
  }

  setUser(user:User){
    this.user=user;
  }
  getUser():User{
    return this.user;
  }

}
