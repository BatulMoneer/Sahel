import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../../service/order.service';


@Component({
  selector: 'app-order-state',
  templateUrl: './order-state.component.html',
  styleUrls: ['./order-state.component.scss']
})
export class OrderStateComponent implements OnInit {

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

  hasOrder: boolean = true;

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
      val += i.info;

    }
    return val;
  }

  price = this.getPrice()

  total = this.price + this.delivery - this.wallet
  orderState: number = 0;
  deliveryPerson: any = { name: '', phone: '' };
  productFound: boolean = false;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.hasOrder = this.orderService.hasOrder();
    this.orderState = this.orderService.getOrderState();
    this.productFound = this.orderService.isProductFound();
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
