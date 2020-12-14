import {Injectable} from '@angular/core';
import {User} from './user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class HttpService{

  private user:User;
  reg: boolean = false;
  access_token:string = null;
  refresh_token:string = null;
  private serverUrls = {
    'reg': 'http://127.0.0.1:8000/users/',
    'auth': 'http://127.0.0.1:8000/users/auth/',
    'test': 'http://127.0.0.1:8000/api-token/refresh/'
  };
  private headers = new HttpHeaders().set('content-type', 'application/json');



  private data;

  constructor(private http: HttpClient){}

  regUser() : Observable<any>{
    return this.http.post(this.serverUrls.reg, {"user": this.user}, {headers: this.headers, withCredentials:true, observe: 'response'} )
  }

  authUser() : Observable<any>{
    this.data = {'login': this.user.login, 'password': this.user.password};
    return this.http.post(this.serverUrls.auth, {'login': this.user.login, 'password': this.user.password}, {headers: this.headers, withCredentials:true, observe: 'response'})

  }

  test(): Observable<any>{
    this.headers = this.headers.set('Access-Token', this.access_token);
    this.headers = this.headers.set('Refresh-Token' , this.refresh_token);
    return this.http.post(this.serverUrls.test, {},{headers: this.headers, withCredentials:true, observe: 'response'})
  }

  setUser(user:User){
    this.user=user;
  }
  getUser():User{
    return this.user;
  }

}
