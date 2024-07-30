import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { auth } from 'src/app/constant/Routes';
import { OtpPopComponent } from 'src/app/main-apps/apps/popup/otp-pop/otp-pop.component';
import { OrderService } from 'src/app/service/order.service';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-store-signup',
  templateUrl: './store-signup.component.html',
  styleUrls: ['./store-signup.component.scss']
})
export class StoreSignupComponent implements OnInit {

  submit = "انشاء حساب";
  link = "/apps/home/app-store-home";
  errorMessages = null;
  selectedFile: File | null = null;
  formData = null;
  submitted_crearte = false;
  constructor(
    private router: Router,
    private service: OrderService,
    private impApiService: ImpApiService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) { }

  signUp() {

    this.spinner.show();

    if (!this.validatePayload(this.formData)) {
      this.spinner.hide()
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
          question_id: 2,
          value: this.formData.branch
        },
        {
          question_id: 3,
          value: this.formData.commercial_register
        },
        {
          question_id: 4,
          value: this.formData.logo
        }
      ]
    };

    this.impApiService.post(auth.create, payload).subscribe(data => {
      if (data.message == "Account successfully created") {
        localStorage.setItem('header', this.formData.user_type_id)
        localStorage.setItem('email', this.formData.email_user)
        console.log(localStorage.getItem('email'))
        this.spinner.hide()
        // this.dialog.open(Otp2PopComponent);
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


  // signUp() {
  //   this.submitted_crearte = true;

  //   if (this.formData.invalid) {
  //     return null;
  //   }
  //   const formValue = this.formData.value;

  //   const payload = {
  //     name_user: formValue.name_user,
  //     email_user: formValue.email_user,
  //     password_user: formValue.password_user,
  //     phone_user: formValue.phone_user,
  //     user_type_id: formValue.user_type_id,
  //     questions: [
  //       {
  //         question_id: 3,
  //         value: formValue.commercial_register
  //       },
  //       {
  //         question_id: 4,
  //         value: formValue.logo
  //       },
  //       {
  //         question_id: 2,
  //         value: formValue.branch
  //       }
  //     ]
  //   };

  //   this.submitted_crearte = true
  //   if (this.formData.invalid) {
  //     return null;
  //   }

  //   this.impApiService.post(auth.create, payload).subscribe(data => {
  //     localStorage.setItem('header', '3')
  //     console.log(data.otp)
  //     this.dialog.open(OtpPopComponent)


  //   })


  // }

  handleFileInput(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  handleImageInput(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
  ngOnInit(): void {

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
