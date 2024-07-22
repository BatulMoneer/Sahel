import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-to-cart-pop',
  templateUrl: './add-to-cart-pop.component.html',
  styleUrls: ['./add-to-cart-pop.component.scss']
})
export class AddToCartPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddToCartPopComponent>) { }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
