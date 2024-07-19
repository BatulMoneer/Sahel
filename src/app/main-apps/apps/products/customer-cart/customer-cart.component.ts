import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerMyInformationComponent } from '../../my-information/customer-my-information/customer-my-information.component';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.scss']
})
export class CustomerCartComponent implements OnInit {

  products = [
    {
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1
    },
    {
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1

    },
    {
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1
    }
  ]

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
      val += i.info;

    }
    return val;
  }

  price = this.getPrice()

  total = this.price + this.delivery - this.wallet



  //@ViewChild('child') child: CustomerMyInformationComponent

  //wallet = this.getWallet();
  //  getWallet() {
  //    return this.child.wallet
  // }

  inc(index) {
    index.amount += 1;
  }

  dec(index) {
    if (index.amount > 0) {
      index.amount -= 1;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
