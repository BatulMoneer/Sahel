import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-collector-orders',
  templateUrl: './collector-orders.component.html',
  styleUrls: ['./collector-orders.component.scss']
})
export class CollectorOrdersComponent implements OnInit {
  allOrders: Order[] = [];
  myShopOrders: Order[] = [];
  otherShopOrders: Order[] = [];
  ordersCount: number = 0;
  link = "/apps/products/collector-order-details";
  value = "قبول";

  constructor(private service: OrderService) { }

  onOrderButtonClick(order: Order): void {
    console.log('Order button clicked for:', order);
    order.status = "accepted"
    this.service.setOrderState(1)
    this.service.setCurrentOrderID(order.id)
    console.log(this.service.getOrderState())

  }

  ngOnInit(): void {
    console.log(this.service.getOrders())
    this.allOrders = this.service.getOrders();
    this.ordersCount = this.allOrders.length;
    this.filterOrders();
  }

  filterOrders(): void {
    const myShopId = 1;

    this.myShopOrders = this.allOrders;
    this.otherShopOrders;
  }
}
