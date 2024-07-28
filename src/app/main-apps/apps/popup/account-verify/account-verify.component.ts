import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-account-verify',
  templateUrl: './account-verify.component.html',
  styleUrls: ['./account-verify.component.scss']
})
export class AccountVerifyComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AccountVerifyComponent>) { }

  onClose(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
  }

}
