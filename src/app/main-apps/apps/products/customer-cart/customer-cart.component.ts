import { link } from 'fs';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerMyInformationComponent } from '../../my-information/customer-my-information/customer-my-information.component';
import { MatDialog } from '@angular/material/dialog';
import { AddToCartPopComponent } from '../../popup/add-to-cart-pop/add-to-cart-pop.component';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/model/order.model';
import { PayNowPopComponent } from '../../popup/pay-now-pop/pay-now-pop.component';
import { customer } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';


@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.scss']
})
export class CustomerCartComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private service: OrderService,
    private impApiService: ImpApiService,
  ) { }

  hasCart = false
  products = []
  cards = [{ card: 1345, check: "one" }, { card: 1345, check: "two" }, { card: 1345, check: "three" }]

  count: number = this.products.length
  shopname = "متجر بنده | فرع الشرائع "
  shopimage = "../../../../../assets/images/Panda.png"
  location = "الشرائع, الفردوس 3726 (بيت)"
  delivery = 20
  wallet = 0

  getPrice(): number {
    return this.products.reduce((acc, item) => acc + item.info * item.amount, 0);
  }

  price: number = 0;
  collectPrice: number = 0;
  noOfItems: number = 0;
  total: number = 0;

  inc(index) {
    index.amount += 1;
    this.updateValues();
  }

  dec(index) {
    if (index.amount > 1) {
      index.amount -= 1;

      this.updateValues();
    }
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.updateValues();
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  currentOrder: Order;

  updateValues(): void {
    this.count = this.products.length;
    this.price = this.getPrice();
    this.collectPrice = (this.price * 5) / 100;
    this.noOfItems = this.count;
    this.total = this.price + this.delivery - this.wallet;
    localStorage.setItem('cart', JSON.stringify(this.products));

    this.currentOrder = {
      id: 0,
      customerId: 2,
      items: this.products.map(p => ({
        productId: p.productId,
        amount: p.amount,
        link: p.link,
        value: p.value,
        title: p.title,
        image: p.image,
        info: p.info,
        barcode: p.barcode
      })),
      status: 'Pending',
      shopImg: this.shopimage,
      shopName: this.shopname,
      noOfItems: this.noOfItems,
      price: this.price,
      collectPrice: this.collectPrice,
      customerLocation: this.location
    };
  }

  orders: Order[] = [];

  openDialog(): void {
    this.service.setHasOrder(true);
    this.orders.push(this.currentOrder);
    console.log("ss", this.orders)
    this.service.createOrder(this.currentOrder);

    const payload = {
      market_id: localStorage.getItem('market'),
      total_price: this.getPrice(),
      delivery_price: this.delivery,
      distance_kilo: 17,
      number_of_products: this.noOfItems
    }

    this.impApiService.post(customer.addOrder, payload).subscribe(data => {
    })
    this.dialog.open(PayNowPopComponent);
    this.router.navigate(['/apps/products/order-state']);
  }

  ngOnInit(): void {


    let retString = localStorage.getItem("cart");
    if (retString) {
      this.products = JSON.parse(retString);
      if (this.products[0])
        this.hasCart = true
    }

    this.updateValues();
    console.log(this.products);
  }

}
