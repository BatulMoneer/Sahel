import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-collector-home',
  templateUrl: './collector-home.component.html',
  styleUrls: ['./collector-home.component.scss']
})
export class CollectorHomeComponent implements OnInit {

  isActive: boolean;
  name = "قصي"
  link = "/apps/products/collector-orders"
  value = "عرض الطلبات"
  constructor(private service: OrderService) { }
  ngOnInit(): void {
    this.isActive = this.service.getStatus();
  }

  toggleStatus(): void {
    this.isActive = !this.isActive;
    this.service.setStatus(this.isActive);
  }

}
