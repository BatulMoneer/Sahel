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
      barcode: '../../../../../assets/images/Barcode.png'
    },
    {
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png'
    },
    {
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png'
    }
  ]

  cards = [1345, 8763, 7398]
  amount = 1
  count = this.products.length
  shopname = "متجر بنده | فرع الشرائع "

  getPrice() {
    let val = 0;
    for (let i of this.products) {
      val += i.info;

    }
    return val;
  }

  price = this.getPrice()

  //@ViewChild('child') child: CustomerMyInformationComponent
  delivery = 20
  wallet = 0
  //wallet = this.getWallet();
  //  getWallet() {
  //    return this.child.wallet
  // }
  total = this.price + this.delivery - this.wallet

  constructor() { }

  ngOnInit(): void {
  }

}
