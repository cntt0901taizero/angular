import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/service/auth.service';
import { LoginformComponent } from './loginform/loginform.component';

@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.css'],
})
export class LoginLogoutComponent implements OnInit {

  tokenIdSession$ = this.authService.tokenIdSession$;
  _tokenIdSession = "";
  _user: any;


  constructor(
    private modalService: NzModalService,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    this.tokenIdSession$.subscribe((res) => {
      this._user = JSON.parse(sessionStorage.getItem("user")!);
      this._tokenIdSession = res;
    });
  }

  openModalSignin(): void {
    this.modalService.create({
      nzTitle: 'Đăng nhập',
      nzContent: LoginformComponent,
      nzFooter: null,
      nzWidth: 300
    });
  }

  

}
