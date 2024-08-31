import { ImpApiService } from './../../services/imp-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { auth, user } from 'src/app/constant/Routes';
import { ForgetPassPopComponent } from 'src/app/main-apps/apps/popup/forget-pass-pop/forget-pass-pop.component';
import { OtpPassPopComponent } from 'src/app/main-apps/apps/popup/otp-pass-pop/otp-pass-pop.component';
import { OtpPopComponent } from 'src/app/main-apps/apps/popup/otp-pop/otp-pop.component';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submit = "تسجيل الدخول";
  link = "home";
  formData = null
  submitted_crearte = false


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private impApiService: ImpApiService,
    private dialog: MatDialog,
    private service: OrderService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      email_user: ['', [
        Validators.required,
        Validators.email
      ]],
      password_user: ['', [
        Validators.required,

        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')
      ]],
    });
  }

  navigateToAccountType() {
    this.router.navigate(['/auth/accountType']);
  }

  login() {
    this.spinner.show()
    this.submitted_crearte = true
    if (this.formData.invalid) {
      this.spinner.hide()

      return null;
    }

    this.impApiService.post(auth.login, this.formData.value).subscribe(data => {
      localStorage.setItem('header', data.user_info.user_type_id)
      localStorage.setItem('email', data.user_info.email_user)
      localStorage.setItem('currentUser', JSON.stringify(data))

      this.spinner.hide()
      this.dialog.open(OtpPopComponent)
    })


  }

  forgotPass() {
    if (this.formData.value.email_user) {
      const payload = {
        email_user: this.formData.value.email_user,
      }
      this.spinner.show()

      this.impApiService.post(user.resetPassword, payload).subscribe(data => {
        if (data.message == "OTP has been Sended to the Email") {
          localStorage.setItem('email', this.formData.value.email_user)
          this.dialog.open(OtpPassPopComponent)
          this.spinner.hide()

        }
      })
      //

    }
    else {
      this.toastr.error("يرجى ادخال البريد");

    }
  }

}
