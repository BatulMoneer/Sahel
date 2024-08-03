import { Router } from '@angular/router';
import { ImpApiService } from './../../../../services/imp-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { user } from 'src/app/constant/Routes';

@Component({
  selector: 'app-forget-pass-pop',
  templateUrl: './forget-pass-pop.component.html',
  styleUrls: ['./forget-pass-pop.component.scss']
})
export class ForgetPassPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ForgetPassPopComponent>,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private impApiService: ImpApiService,
    private router: Router

  ) { }

  submitted_crearte = false
  passwordForm;
  newPassword;
  newPasswordConfirm;


  checkEntered() {
    this.submitted_crearte = true
    this.newPassword = this.passwordForm.value.newPassword;
    this.newPasswordConfirm = this.passwordForm.value.newPasswordConfirm;
    if (this.newPassword && this.newPasswordConfirm) {
      if (this.newPassword == this.newPasswordConfirm) {
        const payload = {
          email_user: this.newPassword,
        }

        localStorage.setItem('token', localStorage.getItem('passToken'))

        this.impApiService.post(user.updatePassword, payload).subscribe(data => {
          this.toastr.success("تم تغيير كلمة السر بنجاح");
          localStorage.removeItem('token')
          localStorage.removeItem('passToken')
          this.dialogRef.close()
        })

      }
      else {
        this.toastr.error("كلمة السر غير مطابقة");

      }
    }
    else {
      this.toastr.error("يرجى ادخال كلمة السر");

    }
  }

  ngOnInit(): void {
    this.passwordForm = this.formBuilder.group({
      newPassword: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')
      ]],
      newPasswordConfirm: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}')
      ]],
    })

  }

}
