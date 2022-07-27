import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  ListMenu = [
    {
      nzTitle: "Trang chủ",
      nzIcon: "book",
      nzOpen: false,
      listMenuItem: [
        {
          nzTitle: "Welcome",
          nzIcon: "",
          routerLink: "/welcome",
          nzMatchRouter: false,
        },
        {
          nzTitle: "Dashboard",
          nzIcon: "",
          routerLink: "",
          nzMatchRouter: false,
        }
      ]
    },
    {
      nzTitle: "Danh mục",
      nzIcon: "bars",
      nzOpen: false,
      listMenuItem: [
        {
          nzTitle: "Quốc gia",
          nzIcon: "",
          routerLink: "",
          nzMatchRouter: false,
        },
        {
          nzTitle: "Tỉnh",
          nzIcon: "",
          routerLink: "",
          nzMatchRouter: false,
        },
        {
          nzTitle: "Huyện",
          nzIcon: "",
          routerLink: "",
          nzMatchRouter: false,
        },
        {
          nzTitle: "Xã",
          nzIcon: "",
          routerLink: "",
          nzMatchRouter: false,
        },
      ]
    },
    {
      nzTitle: "Ứng dụng",
      nzIcon: "appstore",
      nzOpen: false,
      listMenuItem: [
        {
          nzTitle: "Dự án bất động sản",
          nzIcon: "",
          routerLink: "",
          nzMatchRouter: false,
        },
        {
          nzTitle: "Tin tức gần đây",
          nzIcon: "",
          routerLink: "",
          nzMatchRouter: false,
        }
      ]
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
