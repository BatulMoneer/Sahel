import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-manager-registration-requests',
  templateUrl: './choose-manager-registration-requests.component.html',
  styleUrls: ['./choose-manager-registration-requests.component.scss']
})
export class ChooseManagerRegistrationRequestsComponent implements OnInit {

  constructor(private router:Router) { }

  navigateToRequests() {
    const inputId = (event.target as HTMLInputElement).id;
    if (inputId === 'stores') {
      this.router.navigate(['/apps/requests/app-manager-stores-registration-requests']);
    }
    else if (inputId === 'collectors') {
      this.router.navigate(['/apps//requests/app-manager-representative-registration-requests']);
    }
  }


  ngOnInit(): void {
  }

}
