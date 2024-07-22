import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-low-product-pop',
  templateUrl: './change-low-product-pop.component.html',
  styleUrls: ['./change-low-product-pop.component.scss']
})
export class ChangeLowProductPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChangeLowProductPopComponent>) { }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
