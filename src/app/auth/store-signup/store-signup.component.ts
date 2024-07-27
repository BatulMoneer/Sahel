import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { auth } from 'src/app/constant/Routes';
import { OtpPopComponent } from 'src/app/main-apps/apps/popup/otp-pop/otp-pop.component';
import { OrderService } from 'src/app/service/order.service';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-store-signup',
  templateUrl: './store-signup.component.html',
  styleUrls: ['./store-signup.component.scss']
})
export class StoreSignupComponent implements OnInit {

  submit = "انشاء حساب";
  link = "/apps/home/app-store-home";

  constructor(
    private router: Router,
    private service: OrderService,
    private impApiService: ImpApiService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,) { }

  navigateToAccountType() {
    this.router.navigate(['/auth/login']);
  }
  selectedFile: File | null = null;

  formData: FormGroup;
  submitted_crearte = false;

  signUp() {
    this.submitted_crearte = true;

    if (this.formData.invalid) {
      return null;
    }
    const formValue = this.formData.value;

    const payload = {
      name_user: formValue.name_user,
      email_user: formValue.email_user,
      password_user: formValue.password_user,
      phone_user: formValue.phone_user,
      user_type_id: formValue.user_type_id,
      questions: [
        {
          question_id: 3,
          value: formValue.commercial_register
        },
        {
          question_id: 4,
          value: formValue.logo
        },
        {
          question_id: 2,
          value: formValue.branch
        }
      ]
    };

    this.submitted_crearte = true
    if (this.formData.invalid) {
      return null;
    }

    this.impApiService.post(auth.create, payload).subscribe(data => {

      console.log(data.otp)
      this.service.setOtp(data.otp)
      this.dialog.open(OtpPopComponent)


    })


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
      name_user: ['', [
        Validators.required
      ]],
      branch: ['', [
        Validators.required
      ]],
      email_user: ['', [
        Validators.required,
        Validators.email
      ]],
      password_user: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')
      ]],
      phone_user: ['', [
        Validators.required,
        Validators.pattern('^05[0-9]{8}$')
      ]],
      commercial_register: ['', [
        Validators.required
      ]],
      logo: ['', [
        Validators.required
      ]],
      user_type_id: [3]
    });
  }

}
