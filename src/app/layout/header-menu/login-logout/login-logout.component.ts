import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LoginformComponent } from './loginform/loginform.component';

@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.css']
})
export class LoginLogoutComponent implements OnInit {

  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
  }

  openModalSignin(): void {
    this.modalService.create({
      nzTitle: 'Đăng nhập',
      nzContent: LoginformComponent,
      nzFooter: null,
      nzWidth: 400
    });
  }

  

}
