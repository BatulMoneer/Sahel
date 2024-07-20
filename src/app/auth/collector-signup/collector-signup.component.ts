import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-collector-signup',
  templateUrl: './collector-signup.component.html',
  styleUrls: ['./collector-signup.component.scss']
})
export class CollectorSignupComponent implements OnInit {

  ages: number[] = Array.from({ length: 83 }, (_, i) => i + 18);
  submit = "انشاء حساب";
  link = "/apps/home/app-collector-home";

  constructor(private router: Router, private service: OrderService) { }
  navigateToAccountType() {
    this.router.navigate(['/auth/login']);
  }
  ngOnInit(): void {
    this.service.setUser(2)
  }

}
