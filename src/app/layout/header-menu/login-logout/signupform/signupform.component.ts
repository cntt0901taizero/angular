import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ContentfulService } from 'src/app/service/contentful.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})

export class SignupformComponent implements OnInit {
  @Input() dataItem: any;
  rfDataModal!: FormGroup;
  saving = false;
  
  constructor(
    private _dataService: ContentfulService,
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
      passwordComfirm: [''],
      email: [''],
      hoTen: [''],
    });
    if (this.dataItem) {
      this.rfDataModal.patchValue(this.dataItem);
    }
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

}


