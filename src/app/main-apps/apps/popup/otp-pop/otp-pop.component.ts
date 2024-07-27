import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-otp-pop',
  templateUrl: './otp-pop.component.html',
  styleUrls: ['./otp-pop.component.scss']
})
export class OtpPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OtpPopComponent>,
    private service: OrderService,
    private router: Router,
  ) { }

  @ViewChild("ngOtpInput") ngOtpInput: any;
  otp = this.service.getOtp()

  otpCheck() {
    console.log(this.ngOtpInput.currentVal, this.otp)

    if (this.ngOtpInput.currentVal == null || this.ngOtpInput.currentVal.length !== 4) {
      alert("nooo")
      return;
    }

    else if (this.ngOtpInput.currentVal == this.otp) {
      console.log("great?")
      this.dialogRef.close();
      if (this.service.getUser() == 1) {
        this.router.navigate(['/apps/home/app-customer-home']);
      }
      else if (this.service.getUser() == 2) {
        this.router.navigate(['/apps/home/app-collector-home']);
      }
      else if (this.service.getUser() == 3) {
        this.router.navigate(['/apps/home/app-store-home']);
      }
      return;

    }
  }



  ngOnInit(): void {
  }

}

