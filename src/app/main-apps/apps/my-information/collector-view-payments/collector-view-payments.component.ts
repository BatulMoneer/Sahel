import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collector-view-payments',
  templateUrl: './collector-view-payments.component.html',
  styleUrls: ['./collector-view-payments.component.scss']
})
export class CollectorViewPaymentsComponent implements OnInit {

  reciepts = [
    {
      no: 1,
      date: "12-02-2024",
      image: "../../../../../assets/images/Panda.png",
      price: 650

    },
    {
      no: 1,
      date: "12-02-2024",
      image: "../../../../../assets/images/Panda.png",
      price: 650



    },
    {
      no: 1,
      date: "12-02-2024",
      image: "../../../../../assets/images/Panda.png",
      price: 650



    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
