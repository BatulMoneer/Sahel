import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-collector-my-information',
  templateUrl: './collector-my-information.component.html',
  styleUrls: ['./collector-my-information.component.scss']
})
export class CollectorMyInformationComponent implements OnInit {

  request_wallet_link = "/apps/my-information/app-collector-request-wallet"
  wallet_recieve_link = "/apps/my-information/app-collector-view-reciepts"
  reciept_link = "/apps/my-information/app-collector-view-payments"
  info_link = "/apps/my-information/app-collector-edit-information"
  logout_link = "/auth/login"

  job = "مندوب في متجر بنده الشرائع"
  wallet = 1589
  name = "قصي بيدر"
  age = 27
  image = "../../../../../assets/images/Collector.jpg"

  constructor(
    private impApiService: ImpApiService,
    private router: Router
  ) { }

  logOut() {
    this.impApiService.post(auth.logout, localStorage.getItem('token')).subscribe(data => {

    })
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token")

    this.router.navigate(['/auth/login']);
  }

  ngOnInit(): void {
  }

}
