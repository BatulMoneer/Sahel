import { Component, OnInit } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-collector-orders',
  templateUrl: './collector-orders.component.html',
  styleUrls: ['./collector-orders.component.scss']
})
export class CollectorOrdersComponent implements OnInit {

  myShopOrders = [
    {
      orderNo: 1,
      shopImg: "../../../../../assets/images/Panda.png",
      shopName: "بنده الشرائع",
      noOfItems: 3,
      price: 73,
      collectPrice: 30,
      customerLocation: "الشرائع, مخطط 1, 1743",
    },
    {
      orderNo: 1,
      shopImg: "../../../../../assets/images/Panda.png",
      shopName: "بنده الشرائع",
      noOfItems: 3,
      price: 73,
      collectPrice: 30,
      customerLocation: "الشرائع, مخطط 1, 1743",
    },
    {
      orderNo: 1,
      shopImg: "../../../../../assets/images/Panda.png",
      shopName: "بنده الشرائع",
      noOfItems: 3,
      price: 73,
      collectPrice: 30,
      customerLocation: "الشرائع, مخطط 1, 1743",
    }
  ]

  otherShopOrders = [
    {
      orderNo: 1,
      shopImg: "../../../../../assets/images/Panda.png",
      shopName: "بنده الشرائع",
      noOfItems: 3,
      price: 73,
      collectPrice: 30,
      customerLocation: "الشرائع, مخطط 1, 1743",
    },
    {
      orderNo: 1,
      shopImg: "../../../../../assets/images/Panda.png",
      shopName: "بنده الشرائع",
      noOfItems: 3,
      price: 73,
      collectPrice: 30,
      customerLocation: "الشرائع, مخطط 1, 1743",
    }
  ]

  orders = this.myShopOrders.length + this.otherShopOrders.length
  link = "/apps/products/collector-order-details"
  value = "قبول"
  constructor() { }

  ngOnInit(): void {
  }

}
