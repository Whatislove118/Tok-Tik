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
  user_id: number;
  private headers = new HttpHeaders().set('content-type', 'application/json');



  private serverUrls = {
    'reg': 'http://127.0.0.1:8000/users/',
    'auth': 'http://127.0.0.1:8000/users/auth/',
    'test': 'http://127.0.0.1:8000/api-token/refresh/',
    'profile_settings': 'http://127.0.0.1:8000/users/profile/settings/',
    'avatar': 'http://127.0.0.1:8000/users/profile/settings/avatar/',
    'confident': 'http://127.0.0.1:8000/users/profile/settings/confidentiality/',
    'security': 'http://127.0.0.1:8000/users/profile/settings/security/',
    'refresh_token': 'http://127.0.0.1:8000/api-token/refresh/',
    'profile': 'http://127.0.0.1:8000/users/profile/',
    'default_profile_settings': 'http://127.0.0.1:8000/users/profile/settings/default/',
    'add_video': 'http://127.0.0.1:8000/video/add/',
    'get_videos': 'http://127.0.0.1:8000/video/',
    'get_all_videos': 'http://127.0.0.1:8000/video/all/',
    'like_video': 'http://127.0.0.1:8000/video/like/',
    'get_audio': 'http://127.0.0.1:8000/video/audio/',
    'follow': 'http://127.0.0.1:8000/users/follow/',
    'add_comments': 'http://127.0.0.1:8000/video/add_comments/',
    'get_comments': 'http://127.0.0.1:8000/video/get_comments/',
    'like_comments': 'http://127.0.0.1:8000/video/like_comments/',
    'get_video_with_hashtags': 'http://127.0.0.1:8000/video/hashtags/',
  };


  parseUrl(url: string){
    this.user.profile_settings.avatar.url = this.user.profile_settings.avatar.url.concat(url.toString().split(':')[1].split('}')[0].split('"')[1]);
  }

  getVideoWithHashtags(hashtags:string): Observable<any>{
    return this.http.post(this.serverUrls.get_video_with_hashtags, {'hashtags': hashtags}, {headers: this.headers, withCredentials:true, observe: 'response'})
  }

  likeComment(id:number): Observable<any>{
    return this.http.put(this.serverUrls.like_comments, {'id':id}, {headers: this.headers, withCredentials:true, observe: 'response'})
  }

  addComments(data): Observable<any>{
    return this.http.post(this.serverUrls.add_comments,data, {headers: this.headers, withCredentials:true, observe: 'response'}  )
  }

  getComments(id: number): Observable<any>{
    return this.http.post(this.serverUrls.get_comments, {'id': id}, {headers: this.headers, withCredentials:true, observe: 'response'})
  }

  private data;

  constructor(private http: HttpClient){}


  follow(id: number): Observable<any>{
    return this.http.post(this.serverUrls.follow, {'id': id}, {headers: this.headers, withCredentials:true, observe: 'response'})
  }
  getAudio(video_id: number): Observable<any>{
    return this.http.post(this.serverUrls.get_audio, {"video_id": video_id},{headers: this.headers, withCredentials:true, observe: 'response'})
  }
  getAllVideosA(): Observable<any>{
    return this.http.get(this.serverUrls.get_all_videos, {headers: this.headers, withCredentials:true, observe: 'response'})
  }

  likeVideo(video_id: number): Observable<any>{
    return this.http.put(this.serverUrls.like_video, {'video_id': video_id}, {headers: this.headers, withCredentials:true, observe: 'response'})

  }

  getRefreshToken(){
    return this.http.post(this.serverUrls.refresh_token, {headers: this.headers, withCredentials:true, observe: 'response'})
  }

  getUserProfile(id: number): Observable<any>{
    if (id != 0){
      return this.http.post(this.serverUrls.profile, {'id':id},{headers: this.headers, withCredentials:true, observe: 'response'})
    }
    return this.http.get(this.serverUrls.profile,  {headers: this.headers, withCredentials:true, observe: 'response'} )
  }

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
    return this.http.put(this.serverUrls.profile_settings, {'profile-settings': this.user.profile_settings.getWrapper()},
      {
        headers: this.headers, withCredentials:true, observe: 'response',
      });
  }
  skipProfileSettings(): Observable<any>{
    return this.http.post(this.serverUrls.default_profile_settings, {}, {headers: this.headers, withCredentials:true, observe: 'response', responseType: 'text'})
  }

  sendAvatar(formData: FormData): Observable<any>{
    let headers = this.headers.delete('content-type');
    headers = headers.set('enctype', 'multipart/form-data');
    return this.http.put(this.serverUrls.avatar, formData, {headers: headers, withCredentials:true, observe: 'response', responseType: 'text'})
  }

  sendConfidentiality(): Observable<any>{
    return this.http.put(this.serverUrls.confident, {'confidentiality': this.user.profile_settings.confident}, {headers: this.headers, withCredentials:true, observe: 'response'})
  }

  sendSecurity(): Observable<any>{
    return this.http.put(this.serverUrls.security, {'security':this.user.profile_settings.security}, {headers: this.headers, withCredentials:true, observe: 'response'})
  }

  sendVideo(formData: FormData): Observable<any>{
    let headers = this.headers.delete('content-type');
    headers = headers.set('enctype', 'multipart/form-data');
    return this.http.post(this.serverUrls.add_video, formData, {headers: headers, withCredentials:true, observe: 'response', responseType: 'text'})
  }

  getUserVideos(id:number): Observable<any>{
    if (id != 0){
      return this.http.post(this.serverUrls.get_videos, {'id':id},{headers: this.headers, withCredentials:true, observe: 'response'})
    }
    return this.http.get(this.serverUrls.get_videos, {headers: this.headers, withCredentials:true, observe: 'response'})
  }
  setUser(user:User){
    this.user=user;
  }
  getUser():User{
    return this.user;
  }

}
