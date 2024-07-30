import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  header_list = [
    { content: "تسجيل الدخول", link: "/auth/login" },
    { content: "الرئيسية", link: "/auth/home" }
  ]
  ngOnInit(): void {
  }

}
