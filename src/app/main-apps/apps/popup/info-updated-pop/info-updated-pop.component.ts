import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-updated-pop',
  templateUrl: './info-updated-pop.component.html',
  styleUrls: ['./info-updated-pop.component.scss']
})
export class InfoUpdatedPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InfoUpdatedPopComponent>) { }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
