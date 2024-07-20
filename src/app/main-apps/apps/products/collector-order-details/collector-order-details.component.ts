import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-collector-order-details',
  templateUrl: './collector-order-details.component.html',
  styleUrls: ['./collector-order-details.component.scss']
})
export class CollectorOrderDetailsComponent implements OnInit {
  products = [
    {
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1,
      confirmed: true,
      notFound: true
    },
    {
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1,
      confirmed: true,
      notFound: true

    },
    {
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1,
      confirmed: true,
      notFound: true
    }
  ]

  image = "../../../../../assets/images/Panda.png";
  allConfirmed = false;
  link = "/apps/home/app-collector-home"
  value = "اتمام الدفع"

  constructor(private orderService: OrderService) { }

  ngOnInit(): void { }

  onCheckChange(event, index: number, type: string): void {
    if (type === 'confirm') {
      this.products[index].confirmed = true;
      this.products[index].notFound = false;
    } else if (type === 'notFound') {
      this.products[index].notFound = true;
      this.products[index].confirmed = false;
      this.orderService.setProductFound(false);
    }

    this.allConfirmed = this.products.every(product => !product.notFound);
  }


}
