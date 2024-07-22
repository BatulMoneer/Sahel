import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.scss']
})
export class CustomerSignupComponent implements OnInit {

  submit = "انشاء حساب";
  link = "/apps/home/app-customer-home";

  constructor(private router: Router, private service: OrderService, private formBuilder: FormBuilder) { }
  navigateToAccountType() {
    this.router.navigate(['/auth/login']);
  }

  setUser() {
    this.service.setUser(1)
  }

  formData: FormGroup;
  submitted_crearte = false;

  signUp() {
    this.submitted_crearte = true
    if (this.formData.invalid) {
      return null;
    }
    else {
      this.router.navigate(['/apps/home/app-customer-home']);

    }
  }

  ngOnInit(): void {
    this.setUser()

    this.formData = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern('^05[0-9]{8}$')
      ]]
    });

  }

}
