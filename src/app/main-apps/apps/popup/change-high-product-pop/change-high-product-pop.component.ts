import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-change-high-product-pop',
  templateUrl: './change-high-product-pop.component.html',
  styleUrls: ['./change-high-product-pop.component.scss']
})
export class ChangeHighProductPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChangeHighProductPopComponent>, public router: Router
  ) { }

  onConfirm(): void {
    this.dialogRef.close(true);
    this.router.navigate(['/payment']);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
  ngOnInit(): void {
  }

}
