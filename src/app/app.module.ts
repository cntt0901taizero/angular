import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginLogoutComponent } from './layout/header-menu/login-logout/login-logout.component';
import { LoginformComponent } from './layout/header-menu/login-logout/loginform/loginform.component';
import { SignupformComponent } from './layout/header-menu/login-logout/signupform/signupform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AuthService } from './service/auth.service';
import { ContentfulService } from './service/contentful.service';

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginLogoutComponent,
    LoginformComponent,
    SignupformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CoolSocialLoginButtonsModule, // ui google login btn
    AngularFireModule.initializeApp(environment.firebaseConfig) // firebase
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    AuthService,
    ContentfulService,
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
