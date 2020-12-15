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
  private headers = new HttpHeaders().set('content-type', 'application/json').set('enctype','multipart/form-data');



  private serverUrls = {
    'reg': 'http://127.0.0.1:8000/users/',
    'auth': 'http://127.0.0.1:8000/users/auth/',
    'test': 'http://127.0.0.1:8000/api-token/refresh/',
    'profile_settings': 'http://127.0.0.1:8000/users/profile/settings/',
  };




  private data;

  constructor(private http: HttpClient){}

  setTokensInFields(access_token: string, refresh_token: string){
    this.access_token = access_token;
    this.refresh_token = refresh_token;
  }

  setTokensInHeaders(){
    this.headers = this.headers.set('Access-Token', this.access_token);
    this.headers = this.headers.set('Refresh-Token' , this.refresh_token);
  }

  regUser() : Observable<any>{
    return this.http.post(this.serverUrls.reg, {"user": this.user}, {headers: this.headers, withCredentials:true, observe: 'response'} )
  }

  authUser() : Observable<any>{
    this.data = {'login': this.user.login, 'password': this.user.password};
    return this.http.post(this.serverUrls.auth, {'login': this.user.login, 'password': this.user.password}, {headers: this.headers, withCredentials:true, observe: 'response'})

  }

  test(): Observable<any>{
    return this.http.post(this.serverUrls.test, {},{headers: this.headers, withCredentials:true, observe: 'response'})
  }

  sendProfileSettings(): Observable<any>{
    return this.http.put(this.serverUrls.profile_settings, {
        'profile-settings': this.user.profile_settings.getWrapper(),
        'confidentiality': this.user.profile_settings.confident,
        'avatar': this.user.profile_settings.avatar,
        'security':this.user.profile_settings.security
      },
      {
        headers: this.headers, withCredentials:true, observe: 'response',
      });
  }

  setUser(user:User){
    this.user=user;
  }
  getUser():User{
    return this.user;
  }

}
