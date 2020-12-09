import {Injectable} from '@angular/core';
import {User} from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class HttpService{
  private user:User;
  reg: boolean = false;
  url: string = "http://127.0.0.1:8000/api/user/";
  private data: string;

  constructor(private http: HttpClient){}

  regUser(user: User) : Observable<any>{
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this.url, {"user": this.user}, {headers: headers, withCredentials:true} )
  }

  setUser(user:User){
    this.user=user;
  }
  getUser():User{
    return this.user;
  }

}
