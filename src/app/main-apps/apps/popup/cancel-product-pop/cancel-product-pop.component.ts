import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel-product-pop',
  templateUrl: './cancel-product-pop.component.html',
  styleUrls: ['./cancel-product-pop.component.scss']
})
export class CancelProductPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CancelProductPopComponent>) { }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
