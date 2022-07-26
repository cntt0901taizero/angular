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
      nzTitle: "Danh mục",
      nzIcon: "dashboard",
      listMenuItem: [
        {
          nzTitle: "Welcome",
          nzIcon: "",
          routerLink: "/welcome",
        }
      ]
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
