import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginLogoutComponent } from './layout/header-menu/login-logout/login-logout.component';
import { LoginformComponent } from './layout/header-menu/login-logout/loginform/loginform.component';
import { LogoutformComponent } from './layout/header-menu/login-logout/logoutform/logoutform.component';

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginLogoutComponent,
    LoginformComponent,
    LogoutformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: vi_VN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
