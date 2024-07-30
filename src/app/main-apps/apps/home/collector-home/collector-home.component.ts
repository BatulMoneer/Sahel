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
  name = "قصي"
  link = "/apps/products/collector-orders"
  value = "عرض الطلبات"
  constructor(
    private service: OrderService,
    private impApiService: ImpApiService
  ) { }


  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser)
    const payload = {
      user_id: currentUser.user_info.id,
      values_info: "inactive"
    };
    this.impApiService.post(collector.collectorUpdate, payload).subscribe(data => {
      console.log(data)
    })

  }

  toggleStatus(): void {
    this.isActive = !this.isActive;
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser)
    const payload = {
      user_id: currentUser.user_info.id,
      values_info: "inactive"
    };
    this.impApiService.post(collector.collectorUpdate, payload).subscribe(data => {
      console.log(data)
    })

  }

}
