import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { Otp2PopComponent } from 'src/app/main-apps/apps/popup/otp2-pop/otp2-pop.component';
import { auth } from 'src/app/constant/Routes';

@Component({
  selector: 'app-store-signup',
  templateUrl: './store-signup.component.html',
  styleUrls: ['./store-signup.component.scss']
})
export class StoreSignupComponent {
  submit = "انشاء حساب";
  link = "/apps/home/app-store-home";

  formData: any = {
    name_user: '',
    branch: '',
    email_user: '',
    password_user: '',
    phone_user: '',
    commercial_register: '',
    logo: '',
    user_type_id: 3
  };
  errorMessages: any = {
    name_user: '',
    branch: '',
    email_user: '',
    password_user: '',
    phone_user: '',
    commercial_register: '',
    logo: ''
  };
  submitted_crearte = false;

  constructor(
    private router: Router,
    private impApiService: ImpApiService,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) { }

  signUp() {

    this.spinner.show();

    if (!this.validatePayload(this.formData)) {
      return;
    }

    const payload = {
      name_user: this.formData.name_user,
      email_user: this.formData.email_user,
      password_user: this.formData.password_user,
      phone_user: this.formData.phone_user,
      user_type_id: this.formData.user_type_id,
      questions: [
        {
          question_id: 3,
          value: this.formData.commercial_register
        },
        {
          question_id: 4,
          value: this.formData.logo
        },
        {
          question_id: 2,
          value: this.formData.branch
        }
      ]
    };

    this.impApiService.post(auth.create, payload).subscribe(data => {
      this.spinner.hide();
      if (data.otp) {
        this.dialog.open(Otp2PopComponent);
      }
    });
  }

  validatePayload(payload: any): boolean {
    this.submitted_crearte = true;
    this.errorMessages = {
      name_user: '',
      branch: '',
      email_user: '',
      password_user: '',
      phone_user: '',
      commercial_register: '',
      logo: ''
    };
    let isValid = true;

    if (!payload.name_user) {
      this.errorMessages.name_user = 'الحقل مطلوب!';
      isValid = false;
    }
    if (!payload.branch) {
      this.errorMessages.branch = 'الحقل مطلوب!';
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
    if (!payload.phone_user) {
      this.errorMessages.phone_user = 'الحقل مطلوب!';
      isValid = false;
    }
    const phonePattern = /^05[0-9]{8}$/;
    if (!payload.phone_user || !phonePattern.test(payload.phone_user)) {
      this.errorMessages.phone_user = 'الرقم خطأ';
      isValid = false;
    }
    if (!payload.commercial_register) {
      this.errorMessages.commercial_register = 'الحقل مطلوب!';
      isValid = false;
    }
    if (!payload.logo) {
      this.errorMessages.logo = 'الحقل مطلوب!';
      isValid = false;
    }

    return isValid;
  }

  navigateToAccountType() {
    this.router.navigate(['/auth/login']);
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.formData.commercial_register = reader.result as string;
        console.log(this.formData.commercial_register);
      };
      reader.readAsDataURL(file);
    }
  }

  handleImageInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.formData.logo = reader.result as string;
        console.log(this.formData.logo);
      };
      reader.readAsDataURL(file);
    }
  }

}
