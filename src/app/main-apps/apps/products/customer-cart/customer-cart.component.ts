import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerMyInformationComponent } from '../../my-information/customer-my-information/customer-my-information.component';

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
  doneOrder = "ادفع الآن"
  doneOrderLink = "/apps/products/order-state"
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

  constructor() { }

  ngOnInit(): void {
    let retString = localStorage.getItem("cart");
    if (retString) {
      this.products = JSON.parse(retString);
    }
    this.updateValues();
    console.log(this.products);
  }

}
