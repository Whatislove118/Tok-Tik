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



const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth', component: FormAuthComponent },
  { path: 'reg', component: FormRegComponent},
  { path: 'reg/settings', component: SetProfileSettingsComponent },
  { path: 'reg/settings/profile', component: ProfileSettingsComponent},
  { path: 'reg/settings/confident', component: ConfidentComponent},
  { path: 'reg/settings/security', component: SecurityComponent}
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
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
