import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerMyInformationComponent } from '../../my-information/customer-my-information/customer-my-information.component';
import { MatDialog } from '@angular/material/dialog';
import { AddToCartPopComponent } from '../../popup/add-to-cart-pop/add-to-cart-pop.component';


@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.scss']
})
export class CustomerCartComponent implements OnInit {

  products = []
  cards = [{ card: 1345, check: "one" }, { card: 1345, check: "two" }, { card: 1345, check: "three" }]

  count = this.products.length
  shopname = "متجر بنده | فرع الشرائع "
  shopimage = "../../../../../assets/images/Panda.png"
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

  price = this.getPrice()

  total = this.price + this.delivery - this.wallet

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

  updateValues() {
    this.count = this.products.length;
    this.price = this.getPrice();
    this.total = this.price + this.delivery - this.wallet;
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  constructor(private dialog: MatDialog, private router: Router) { }

  openDialog(): void {
    this.dialog.open(AddToCartPopComponent);
    this.router.navigate(['/apps/products/order-state']);

  }

  ngOnInit(): void {
    let retString = localStorage.getItem("cart");
    if (retString) {
      this.products = JSON.parse(retString);
    }
    this.updateValues();
    console.log(this.products);
  }

}
