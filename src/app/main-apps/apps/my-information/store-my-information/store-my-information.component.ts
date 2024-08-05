import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-my-information',
  templateUrl: './store-my-information.component.html',
  styleUrls: ['./store-my-information.component.scss']
})
export class StoreMyInformationComponent implements OnInit {

  img = "../../../../../assets/images/Panda.png"; //store_logo

  commercialRegistration = "../../../../../assets/images/commercialRegistration.jpg"

  constructor(private router: Router) { }

  ngOnInit(): void { }

  signout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token")
    this.router.navigate(['/auth/home']);
  }

  update_() {
    location.reload()
  }

}
