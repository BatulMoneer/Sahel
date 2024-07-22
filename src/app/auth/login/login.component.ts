import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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


  constructor(private router: Router, private formBuilder: FormBuilder) { }
  navigateToAccountType() {
    this.router.navigate(['/auth/accountType']);
  }

  login() {


    this.submitted_crearte = true
    if (this.formData.invalid) {
      return null;
    }
    else {
      this.router.navigate(['/auth/accountType']);
    }
  }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}') // At least one uppercase, one lowercase, and one number
      ]],
    });
  }

}
