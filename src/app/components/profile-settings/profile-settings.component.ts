import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../../HttpService';
import {Router} from '@angular/router';
import {User} from '../../../user';
import {isBoolean} from 'util';
import {Avatar} from '../../../Avatar';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  user: User = this.httpService.getUser();
  username: string;
  push_notification: boolean;
  img: File = null;
  first_routing: boolean = true;
  @ViewChild('name', {static: false}) name: ElementRef;

  constructor(private router: Router, private httpService: HttpService) { }

  check_first_routing(){
    if(this.router.url!='/reg/settings/profile'){
      this.first_routing = false;
    }
  }

  handleFileInput(files: FileList) {
    this.img = files.item(0);
  }

  set_profile_settings() {
    let formData = new FormData();
    let avatar = new Avatar(this.img);
    this.user.profile_settings.set_profile_settings(this.username, this.push_notification, avatar);
    formData.append('avatar', this.img, this.img.name);
    this.httpService.sendProfileSettings().subscribe((data: Response) => {
        console.log('Changes good')
      }, onerror => {
        console.log('shahid');
        return
      }
    );
    this.httpService.sendAvatar(formData).subscribe((data: Response) => {
        console.log('Image good');
        console.log(JSON.parse(JSON.stringify(data.body)));
        let url = JSON.parse(JSON.stringify(data.body));
        // this.httpService.parseUrl(url);
        // console.log(this.user.profile_settings.avatar.url)
      }, onerror => {
        alert('ska');
        return
      }
    );
    alert('Настройки были изменены');
    console.log('1 ' + this.first_routing)
    if (this.first_routing != true) {
      this.router.navigate(['profile/settings'])
    } else {
      this.router.navigate(['reg/settings/confident'])
    }
  }

  ngAfterViewInit(){
      this.name.nativeElement.placeholder = this.user.profile_settings.username;


  }

  ngOnInit() {
    console.log(this.user);
    this.check_first_routing();
    console.log(this.first_routing)
  }

  submit_changes(){
    alert('Настройки были изменены')
  }

  skip_profile_settings(){
    this.router.navigate(['reg/settings/confident'])
  }

  next() {
    let avatar = new Avatar(this.img);
    this.user.profile_settings.set_profile_settings(this.username, Boolean(this.push_notification), avatar);
    console.log(JSON.stringify(this.user.profile_settings));
    if (this.first_routing != true){
      this.router.navigate(['profile/settings'])
    }
    this.router.navigate(['reg/settings/confident'])
  }
}
