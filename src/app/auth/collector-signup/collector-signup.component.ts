import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-collector-signup',
  templateUrl: './collector-signup.component.html',
  styleUrls: ['./collector-signup.component.scss']
})
export class CollectorSignupComponent implements OnInit {

  ages: number[] = Array.from({ length: 83 }, (_, i) => i + 18);
  submit = "انشاء حساب";
  link = "/apps/home/app-collector-home";

  year = (new Date()).getFullYear() - 18
  constructor(private router: Router, private service: OrderService, private formBuilder: FormBuilder) { }

  formData: FormGroup;
  submitted_crearte = false;

  signUp() {
    this.submitted_crearte = true
    if (this.formData.invalid) {
      return null;
    }
    else {
      this.router.navigate(['/apps/home/app-collector-home']);

    }
  }
  navigateToAccountType() {
    this.router.navigate(['/auth/login']);
  }
  ngOnInit(): void {
    this.service.setUser(2)

    this.formData = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      age: ['', [
        Validators.required
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
