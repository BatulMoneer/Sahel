import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  header_list = [
    { content: "حسابي", link: "/apps/my-information/app-customer-my-information" },
    { content: "طلباتي", link: "/apps/products/order-state" },
    { content: "السلة", link: "/apps/products/customer-cart" },
    { content: "الرئيسية", link: "/apps/home/app-customer-home" }
  ]
  ngOnInit(): void {
  }

}
