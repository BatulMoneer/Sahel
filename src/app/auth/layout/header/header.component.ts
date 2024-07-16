import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  header_list = [
    {content:"تسجيل الدخول", link:"login"},
    {content:"السلة", link:"cart"},
    {content:"الرئيسية", link:"home"}
  ]
  ngOnInit(): void {
  }

}
