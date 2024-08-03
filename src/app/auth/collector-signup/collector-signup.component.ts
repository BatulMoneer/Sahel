import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { auth } from 'src/app/constant/Routes';
import { OtpPopComponent } from 'src/app/main-apps/apps/popup/otp-pop/otp-pop.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { Otp2PopComponent } from 'src/app/main-apps/apps/popup/otp2-pop/otp2-pop.component';

@Component({
  selector: 'app-collector-signup',
  templateUrl: './collector-signup.component.html',
  styleUrls: ['./collector-signup.component.scss']
})
export class CollectorSignupComponent {
  ages: number[] = Array.from({ length: 83 }, (_, i) => i + 18);
  submit = "انشاء حساب";
  link = "/apps/home/app-collector-home";
  year = (new Date()).getFullYear() - 18;

  constructor(
    private router: Router,
    private service: OrderService,
    private impApiService: ImpApiService,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService

  ) { }

  formData: any = {
    name_user: '',
    phone_user: '',
    email_user: '',
    password_user: '',
    user_type_id: 2,
    age: ''
  };

  errorMessages: any = {
    name_user: '',
    phone_user: '',
    email_user: '',
    password_user: '',
    age: ''
  };

  submitted_crearte = false;

  signUp() {
    this.spinner.show()

    if (!this.validatePayload(this.formData)) {
      this.spinner.hide()
      return;
    }

    const payload = {
      name_user: this.formData.name_user,
      phone_user: this.formData.phone_user,
      email_user: this.formData.email_user,
      password_user: this.formData.password_user,
      user_type_id: this.formData.user_type_id,
      questions: [
        {
          question_id: 1,
          value: this.formData.age
        }
      ]
    };

    this.impApiService.post(auth.register, payload).subscribe(data => {
      if (data.message == "Account successfully created") {
        localStorage.setItem('header', this.formData.user_type_id)
        localStorage.setItem('email', this.formData.email_user)
        console.log(localStorage.getItem('email'))
        this.spinner.hide()
        this.dialog.open(Otp2PopComponent);
      }
    });
  }

  validatePayload(payload: any): boolean {
    this.submitted_crearte = true;
    this.errorMessages = {
      name_user: '',
      phone_user: '',
      email_user: '',
      password_user: '',
      age: ''
    };

    let isValid = true;

    if (!payload.name_user) {
      this.errorMessages.name_user = 'الحقل مطلوب!';
      isValid = false;
    }

    if (!payload.phone_user) {
      this.errorMessages.phone_user = 'الحقل مطلوب!';
      isValid = false;
    }
    const phonePattern = /^05[0-9]{8}$/;
    if (!payload.phone_user || !phonePattern.test(payload.phone_user)) {
      this.errorMessages.phone_user = 'الرقم خطأ';
      isValid = false;
    }

    if (!payload.email_user) {
      this.errorMessages.email_user = 'الحقل مطلوب!';
      isValid = false;
    }
    if (!payload.email_user || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(payload.email_user)) {
      this.errorMessages.email_user = 'البريد خطأ';
      isValid = false;
    }

    if (!payload.password_user) {
      this.errorMessages.password_user = 'الحقل مطلوب!';
      isValid = false;
    }
    if (!payload.password_user || !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/.test(payload.password_user)) {
      this.errorMessages.password_user = 'كلمة المرور يجب ان تكون اطول من 8 عناصر ويجب ان تحوي أرقام وحروف كبيرة وصغيرة';
      isValid = false;
    }

    if (!payload.age) {
      this.errorMessages.age = 'الحقل مطلوب!';
      isValid = false;
    }

    return isValid;
  }

  navigateToAccountType() {
    this.router.navigate(['/auth/login']);
  }

  OnInit() { }
}
