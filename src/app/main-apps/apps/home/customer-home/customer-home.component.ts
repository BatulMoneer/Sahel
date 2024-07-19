import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  more_shops = "المزيد"
  more_shops_link = "sth"


  moreProducts = "عرض المنتجات"
  productLink = "/apps/products/customer-view-products"

  title = 'متجر بنده';
  image = '../../../assets/images/Panda.png';
  info = 'فرع الشرائع';
  constructor() { }

  ngOnInit(): void {
  }

}
