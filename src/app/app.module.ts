import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormAuthComponent } from './components/form-auth/form-auth.component';
import { FormRegComponent } from './components/form-reg/form-reg.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import {HttpService} from '../HttpService';
import { HttpClientModule} from '@angular/common/http';
import { SetProfileSettingsComponent } from './components/set-profile-settings/set-profile-settings.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { ConfidentComponent } from './components/confident/confident.component';
import { SecurityComponent } from './components/security/security.component';
import {DeviceDetectorService} from 'ngx-device-detector';
import {Profile_settings} from '../profile_settings';
import { ProfileComponent } from './components/profile/profile.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MainGuard} from './MainGuard';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { TapeComponent } from './components/tape/tape.component';
import { ShareLinkComponent } from './components/share-link/share-link.component';
import { MusicComponent } from './components/music/music.component';
import { CommentsComponent } from './components/comments/comments.component';






const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth', component: FormAuthComponent },
  { path: 'reg', component: FormRegComponent},
  { path: 'reg/settings', component: SetProfileSettingsComponent ,canActivate:[MainGuard]},
  { path: 'reg/settings/profile', component: ProfileSettingsComponent, canActivate:[MainGuard]},
  { path: 'reg/settings/confident', component: ConfidentComponent, canActivate:[MainGuard]},
  { path: 'reg/settings/security', component: SecurityComponent, canActivate:[MainGuard]},
  { path: 'profile', component: ProfileComponent, canActivate:[MainGuard]},
  { path: 'profile/settings', component: UserSettingsComponent, canActivate:[MainGuard]},
  { path: 'profile/settings/set_profile', component: ProfileSettingsComponent, canActivate:[MainGuard]},
  { path: 'profile/settings/set_confident', component: ConfidentComponent, canActivate:[MainGuard]},
  { path: 'profile/settings/set_security', component: SecurityComponent, canActivate:[MainGuard]},
  { path: 'search', component: SearchComponent, canActivate: [MainGuard]},
  { path: 'tape', component: TapeComponent, canActivate: [MainGuard]},
  { path: 'video/music', component: MusicComponent, canActivate: [MainGuard]},
  { path: 'video/comments', component: CommentsComponent, canActivate: [MainGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FormAuthComponent,
    FormRegComponent,
    HeaderComponent,
    SetProfileSettingsComponent,
    ProfileSettingsComponent,
    ConfidentComponent,
    SecurityComponent,
    ProfileComponent,
    UserSettingsComponent,
    NavbarComponent,
    SearchComponent,
    TapeComponent,
    ShareLinkComponent,
    MusicComponent,
    CommentsComponent,


  ],
  exports: [
    HttpClientModule
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,





  ],
  providers: [HttpService, MainGuard, {provide:LocationStrategy,useClass:HashLocationStrategy}, DeviceDetectorService, Profile_settings],
  bootstrap: [AppComponent]
})
export class AppModule { }
