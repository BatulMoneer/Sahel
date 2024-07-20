import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.scss']
})
export class CustomerSignupComponent implements OnInit {

  submit = "انشاء حساب";
  link = "/apps/home/app-customer-home";

  constructor(private router: Router, private service: OrderService) { }
  navigateToAccountType() {
    this.router.navigate(['/auth/login']);
  }

  setUser() {
    this.service.setUser(1)
  }



  ngOnInit(): void {
    this.setUser()
  }

}
