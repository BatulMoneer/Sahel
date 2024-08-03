import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { auth } from 'src/app/constant/Routes';
import { OrderService } from 'src/app/service/order.service';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { ForgetPassPopComponent } from '../forget-pass-pop/forget-pass-pop.component';

@Component({
  selector: 'app-otp-pass-pop',
  templateUrl: './otp-pass-pop.component.html',
  styleUrls: ['./otp-pass-pop.component.scss']
})
export class OtpPassPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OtpPassPopComponent>,
    private service: OrderService,
    private router: Router,
    private dialog: MatDialog,
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
  ) { }

  @ViewChild("ngOtpInput") ngOtpInput: any;
  currentEmail = localStorage.getItem("email");


  otpCheck() {
    this.spinner.show()
    const payload = {
      email_user: this.currentEmail,
      otp_entered: this.ngOtpInput.currentVal
    };

    console.log(payload)

    this.impApiService.post(auth.verifyOtp, payload).subscribe(data => {
      localStorage.setItem('passToken', data.access_token)
      this.dialogRef.close();
      this.spinner.hide()
      this.dialog.open(ForgetPassPopComponent)


    },
      error => {
        console.log(error);
        this.toastr.error('يرجى اعادة المحاولة')

      })


  }



  ngOnInit(): void {
    console.log(this.currentEmail)
  }

}
