import { Component, OnInit } from '@angular/core';
import { collector } from 'src/app/constant/Routes';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/service/order.service';
import { ImpApiService } from 'src/app/services/imp-api.service';

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

  constructor(
    private service: OrderService,
    private impApiService: ImpApiService
  ) { }

  onOrderButtonClick(order: Order): void {
    console.log('Order button clicked for:', order);
    order.status = "accepted"
    this.service.setOrderState(1)
    this.service.setCurrentOrderID(order.id)
    console.log(this.service.getOrderState())

  }

  isActive;
  ngOnInit(): void {
    console.log(this.service.getOrders())
    this.allOrders = this.service.getOrders();
    this.ordersCount = this.allOrders.length;
    this.filterOrders();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.impApiService.get(`${collector.getCollectorStatus}${currentUser.user_info.id}`).subscribe(data => {
      this.isActive = data.collector_status[0] === 'active';
    });

    if (this.isActive) {

    }

  }

  filterOrders(): void {
    const myShopId = 1;

    this.myShopOrders = this.allOrders;
    this.otherShopOrders;
  }
}
