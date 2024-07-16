import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collector-signup',
  templateUrl: './collector-signup.component.html',
  styleUrls: ['./collector-signup.component.scss']
})
export class CollectorSignupComponent implements OnInit {

  ages: number[] = Array.from({ length: 83 }, (_, i) => i + 18);
  submit = "انشاء حساب";
  link = "home";

  constructor(private router:Router) { }
  navigateToAccountType() {
    this.router.navigate(['/auth/login']);
  }
  ngOnInit(): void {
  }

}
