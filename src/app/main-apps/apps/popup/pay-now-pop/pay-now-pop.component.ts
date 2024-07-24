import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pay-now-pop',
  templateUrl: './pay-now-pop.component.html',
  styleUrls: ['./pay-now-pop.component.scss']
})
export class PayNowPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PayNowPopComponent>) { }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
