import { Component, OnInit } from '@angular/core';
import { auth, collector } from 'src/app/constant/Routes';
import { OrderService } from 'src/app/service/order.service';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-collector-home',
  templateUrl: './collector-home.component.html',
  styleUrls: ['./collector-home.component.scss']
})
export class CollectorHomeComponent implements OnInit {

  isActive: boolean;
  status: any;
  name = "قصي";
  link = "/apps/products/collector-orders";
  value = "عرض الطلبات";

  constructor(
    private service: OrderService,
    private impApiService: ImpApiService
  ) { }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);

    this.impApiService.get(`${collector.getCollectorStatus}${currentUser.user_info.id}`).subscribe(data => {
      this.status = data.collector_status[0];
      console.log(this.status);
      this.isActive = this.status === 'active';
    });
  }

  toggleStatus(): void {
    this.isActive = !this.isActive;
    console.log(this.isActive);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);

    const payload = {
      user_id: currentUser.user_info.id,
      values_info: this.isActive ? 'active' : 'inactive'
    };

    console.log(this.isActive ? 'active' : 'inactive');

    this.impApiService.post(collector.updateCollectorStatus, payload).subscribe(data => {
      console.log(data);
    });
  }
}
