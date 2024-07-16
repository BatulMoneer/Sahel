import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-signup',
  templateUrl: './store-signup.component.html',
  styleUrls: ['./store-signup.component.scss']
})
export class StoreSignupComponent implements OnInit {

  submit = "انشاء حساب";
  link = "home";

  constructor(private router:Router) { }
  navigateToAccountType() {
    this.router.navigate(['/auth/login']);
  }
  selectedFile: File | null = null;

  handleFileInput(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  handleImageInput(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
  ngOnInit(): void {
  }

}
