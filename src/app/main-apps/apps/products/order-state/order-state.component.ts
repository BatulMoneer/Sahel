import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../../service/order.service';


@Component({
  selector: 'app-order-state',
  templateUrl: './order-state.component.html',
  styleUrls: ['./order-state.component.scss']
})
export class OrderStateComponent implements OnInit {

  products = []

  hasOrder: boolean = false;
  timeOut = false;

  card: number = 3374;

  linkOrder = "/apps/products/customer-view-products"
  valueOrder = "عرض المنتجات"
  count = this.products.length
  shopname = "متجر بنده | فرع الشرائع "
  shopimage = "../../../../../assets/images/Panda.png"
  doneOrder = "ادفع الآن"
  doneOrderLink = "link"
  location = "الشرائع, الفردوس 3726 (بيت)"
  delivery = 20
  wallet = 0

  getPrice() {
    let val = 0;
    for (let i of this.products) {
      val += i.info * i.amount;

    }
    return val;
  }

  allProductFound = this.orderService.isAllProductFound
  price = this.getPrice()

  total = this.price + this.delivery - this.wallet
  orderState: number = 0;
  deliveryPerson: any = { name: '', phone: '' };
  productFound: boolean = false;



  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.hasOrder = this.orderService.getHasOrder()
    this.orderState = this.orderService.getOrderState();
    console.log(this.orderState)
    this.productFound = this.orderService.isProductFound();



    let retString = localStorage.getItem("cart");
    if (retString) {
      this.products = JSON.parse(retString);
    }

    this.count = this.products.length

    this.price = this.getPrice()
    this.total = this.price + this.delivery - this.wallet
    console.log(this.products);
  }

  nextState(): void {

    if (this.orderState === 2 && !this.productFound) {
      return;
    }
    this.orderState++;
    if (this.orderState === 3) {
      this.deliveryPerson = { name: 'قصي', phone: '0577896554' };
    }
  }



}
