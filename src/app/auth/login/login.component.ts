import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submit = "تسجيل الدخول";
  link = "home";

  constructor(private router:Router) { }
  navigateToAccountType() {
    this.router.navigate(['/auth/accountType']);
  }

  ngOnInit(): void {
  }

}
