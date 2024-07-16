import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.scss']
})
export class AccountTypeComponent implements OnInit {

  constructor(private router:Router) { }

  navigateToAccountType() {
    const inputId = (event.target as HTMLInputElement).id;
    if (inputId === 'customer') {
      this.router.navigate(['/auth/customerSignup']);
    }
    else if (inputId === 'collector') {
      this.router.navigate(['/auth/collectorSignup']);
    }
    else if (inputId === 'store') {
      this.router.navigate(['/auth/storeSignup']);
    }
  }


  ngOnInit(): void {
  }

}
