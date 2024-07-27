import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-collector-order-details',
  templateUrl: './collector-order-details.component.html',
  styleUrls: ['./collector-order-details.component.scss']
})
export class CollectorOrderDetailsComponent implements OnInit {
  products = [];

  image = "../../../../../assets/images/Panda.png";
  allConfirmed = false;
  link = "/apps/home/app-collector-home"
  value = "اتمام الدفع"

  constructor(private orderService: OrderService) { }


  ngOnInit(): void {
    const currentOrder = this.orderService.getOrderById(this.orderService.getCurrentOrderID());
    if (currentOrder) {
      this.products = currentOrder.items || [];
    }
  }

  onCheckChange(event, index: number, type: string): void {
    if (type === 'confirm') {
      this.products[index].confirmed = true;
      this.products[index].notFound = false;
    } else if (type === 'notFound') {
      this.products[index].notFound = true;
      this.products[index].confirmed = false;
      this.orderService.setProductFound(false);
      this.orderService.setOrderState(2);
    }

    this.allConfirmed = this.products.every(product => !product.notFound);


  }

  doneOrder() {
    this.orderService.setAllProductFound(true)
    this.orderService.setOrderState(2);
    this.orderService.setProductFound(true);


  }

}
