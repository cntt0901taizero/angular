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
// import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
// import { GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    // SocialLoginModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           '798964895342-hkba27h77nmogd8pmfalmo1lfa2udjin.apps.googleusercontent.com'
    //         )
    //       },
    //       {
    //         id: FacebookLoginProvider.PROVIDER_ID,
    //         provider: new FacebookLoginProvider('798964895342-hkba27h77nmogd8pmfalmo1lfa2udjin.apps.googleusercontent.com')
    //       }
    //     ],
    //     onError: (err) => {
    //       console.error(err);
    //     }
    //   } as SocialAuthServiceConfig,
    // }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
