import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-my-information',
  templateUrl: './manager-my-information.component.html',
  styleUrls: ['./manager-my-information.component.scss']
})
export class ManagerMyInformationComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token")

    this.router.navigate(['/auth/login']);

  }

  update_() {
    this.router.navigate(['apps/my-information/app-manager-my-information']);
  }

}
