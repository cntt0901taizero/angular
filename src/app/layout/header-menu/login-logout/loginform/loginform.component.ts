// import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ContentfulService } from 'src/app/service/contentful.service';
import { SignupformComponent } from '../signupform/signupform.component';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})

export class LoginformComponent implements OnInit {
  @Input() dataItem: any;
  rfDataModal!: FormGroup;
  saving = false;
  // user!:SocialUser;
  
  constructor(
    private _dataService: ContentfulService,
    // private authService: SocialAuthService,
    private modal: NzModalRef,
    private modalService: NzModalService,
    private fb: FormBuilder,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
    this.rfDataModal = this.fb.group({
      id: 0,
      userName: [''],
      password: [''],
      remember: false,
    });
    if (this.dataItem) {
      this.rfDataModal.patchValue(this.dataItem);
    }
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    // })
  }

  save(): void {
    if (this.rfDataModal.invalid) {
      this.notification.error('Vui lòng xem lại thông tin form', '', { nzPlacement: 'bottomRight' });
        for (const i in this.rfDataModal.controls) {
            this.rfDataModal.controls[i].markAsDirty();
            this.rfDataModal.controls[i].updateValueAndValidity();
        }
    } else {
        this.saving = true;
        if (this.rfDataModal.get('id')!.value > 0) {
          
        } else {
          
        }
    }
  }

  close(isSave?: boolean): void {
      this.modal.destroy(isSave);
  }

  openModalSignup(): void {
    this.close();
    this.modalService.create({
      nzTitle: 'Đăng ký',
      nzContent: SignupformComponent,
      nzFooter: null,
      nzWidth: 400
    });
  }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  // signOut(): void {
  //   this.authService.signOut();
  // }
  
}


