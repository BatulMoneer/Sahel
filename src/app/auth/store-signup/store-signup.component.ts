import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
export class StoreSignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private impApiService: ImpApiService,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name_user: ['', Validators.required],
      branch: ['', Validators.required],
      email_user: ['', [Validators.required, Validators.email]],
      password_user: ['', [Validators.required, Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/)]],
      phone_user: ['', [Validators.required, Validators.pattern(/^05[0-9]{8}$/)]],
      commercial_register: ['', Validators.required],
      logo: ['', Validators.required],
      user_type_id: [3]
    });
  }

  get f() { return this.signupForm.controls; }

  signUp() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    this.spinner.show();

    const formData = new FormData();
    formData.append('name_user', this.signupForm.value.name_user);
    formData.append('email_user', this.signupForm.value.email_user);
    formData.append('password_user', this.signupForm.value.password_user);
    formData.append('phone_user', this.signupForm.value.phone_user);
    formData.append('user_type_id', '3');

    formData.append('questions[0][question_id]', '2');
    formData.append('questions[0][value]', this.signupForm.value.branch);
    formData.append('questions[1][question_id]', '3');
    formData.append('questions[1][value]', this.signupForm.value.commercial_register);
    formData.append('questions[2][question_id]', '4');
    formData.append('questions[2][value]', this.signupForm.value.logo);

    console.log(formData)
    this.impApiService.post(auth.create, formData).subscribe(data => {
      if (data.message == "Account successfully created") {
        localStorage.setItem('header', '3');
        localStorage.setItem('email', this.signupForm.value.email_user);
        console.log(localStorage.getItem('email'));
        this.spinner.hide();
        this.dialog.open(Otp2PopComponent);
      } else {
        this.spinner.hide();
      }
    });
  }


  navigateToAccountType() {
    this.router.navigate(['/auth/login']);
  }

  handleImageInput(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.signupForm.patchValue({
        logo: file
      });
      console.log('Image file selected:', file);
    }
  }

  handleFileInput(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.signupForm.patchValue({
        commercial_register: file
      });
      console.log('File selected:', file);
    }
  }


}
