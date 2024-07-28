import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  current_user = ""

  constructor(private serv: OrderService) { }

  header_list = []
  val = localStorage.getItem('header');

  User() {
    if (this.val == '1') {
      this.header_list = [{ content: "حسابي", link: "/apps/my-information/app-customer-my-information" },
      { content: "طلباتي", link: "/apps/products/order-state" },
      { content: "السلة", link: "/apps/products/customer-cart" },
      { content: "الرئيسية", link: "/apps/home/app-customer-home" }];
    }
    else if (this.val == '2') {
      this.header_list = [
        { content: "حسابي", link: "/apps/my-information/app-collector-my-information" },
        { content: "الطلبات", link: "/apps/products/collector-orders" },
        { content: "الرئيسية", link: "/apps/home/app-collector-home" }
      ]
    }
    else if (this.val == '3') {
      this.header_list = [
        { content: "حسابي", link: "" },
        { content: "ادارة المنتجات", link: "" },
        { content: "الاحصائيات", link: "" },
        { content: "الرئيسية", link: "" }
      ]
    }
  }


  ngOnInit(): void {
    this.User()
  }

}
