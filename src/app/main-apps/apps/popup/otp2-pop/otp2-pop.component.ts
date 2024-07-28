import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { auth } from 'src/app/constant/Routes';
import { OrderService } from 'src/app/service/order.service';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { AccountVerifyComponent } from '../account-verify/account-verify.component';

@Component({
  selector: 'app-otp2-pop',
  templateUrl: './otp2-pop.component.html',
  styleUrls: ['./otp2-pop.component.scss']
})
export class Otp2PopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<Otp2PopComponent>,
    private service: OrderService,
    private router: Router,
    private impApiService: ImpApiService,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) { }

  @ViewChild("ngOtpInput") ngOtpInput: any;
  currentEmail = localStorage.getItem("email");
  currentID = JSON.parse(localStorage.getItem("header"));


  otpCheck() {
    this.spinner.show()
    const payload = {
      email_user: this.currentEmail,
      otp_entered: this.ngOtpInput.currentVal
    };

    console.log(payload)

    this.impApiService.post(auth.verifyOtp, payload).subscribe(data => {
      localStorage.setItem('token', data.access_token)
      if (this.currentID == '1') {
        this.router.navigate(["/apps/home/app-customer-home"])
        this.spinner.hide()

        this.dialogRef.close();
      }
      if (this.currentID == '2') {

        this.spinner.hide()

        this.dialogRef.close();
        this.dialog.open(AccountVerifyComponent)

      }
      if (this.currentID == '3') {

        this.router.navigate(["/apps/home/app-store-home"])
        this.spinner.hide()

        this.dialogRef.close();

      }
      if (this.currentID == '4') {

        this.router.navigate(["/apps/home/app-admin-home"])
        this.spinner.hide()

        this.dialogRef.close();

      }


    })


  }



  ngOnInit(): void {
  }
}
