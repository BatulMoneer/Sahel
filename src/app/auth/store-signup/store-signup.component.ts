import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private router: Router, private service: OrderService, private formBuilder: FormBuilder) { }
  navigateToAccountType() {
    this.router.navigate(['/auth/login']);
  }
  selectedFile: File | null = null;

  formData: FormGroup;
  submitted_crearte = false;

  signUp() {
    this.submitted_crearte = true
    if (this.formData.invalid) {
      return null;
    }
    else {
      this.router.navigate(['/apps/home/app-store-home']);

    }
  }

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

    this.formData = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      section: ['', [
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
      ]],
      record: ['', [
        Validators.required
      ]],
      logo: ['', [
        Validators.required
      ]],
    });
  }

}
