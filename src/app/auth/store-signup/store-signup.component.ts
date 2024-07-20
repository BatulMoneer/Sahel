import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-store-signup',
  templateUrl: './store-signup.component.html',
  styleUrls: ['./store-signup.component.scss']
})
export class StoreSignupComponent implements OnInit {

  submit = "انشاء حساب";
  link = "/apps/home/app-store-home";

  constructor(private router: Router, private service: OrderService) { }
  navigateToAccountType() {
    this.router.navigate(['/auth/login']);
  }
  selectedFile: File | null = null;

  handleFileInput(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  handleImageInput(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
  ngOnInit(): void {
    this.service.setUser(3)
  }

}
