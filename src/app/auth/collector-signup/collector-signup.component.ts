import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { auth } from 'src/app/constant/Routes';
import { OtpPopComponent } from 'src/app/main-apps/apps/popup/otp-pop/otp-pop.component';
import { MatDialog } from '@angular/material/dialog';


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
  constructor(
    private router: Router,
    private service: OrderService,
    private formBuilder: FormBuilder,
    private impApiService: ImpApiService,
    private dialog: MatDialog,) { }

  formData: FormGroup;
  submitted_crearte = false;

  signUp() {
    if (this.formData.invalid) {
      return null;
    }

    const formValue = this.formData.value;

    const payload = {
      name_user: formValue.name_user,
      phone_user: formValue.phone_user,
      email_user: formValue.email_user,
      password_user: formValue.password_user,
      user_type_id: formValue.user_type_id,
      questions: [
        {
          question_id: 1,
          value: formValue.age
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


  navigateToAccountType() {
    this.router.navigate(['/auth/login']);
  }
  ngOnInit(): void {
    this.service.setUser(2)

    this.formData = this.formBuilder.group({
      name_user: ['', [
        Validators.required
      ]],
      email_user: ['', [
        Validators.required,
        Validators.email
      ]],
      age: ['', [
        Validators.required
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
      user_type_id: [2]
    });
  }

}
