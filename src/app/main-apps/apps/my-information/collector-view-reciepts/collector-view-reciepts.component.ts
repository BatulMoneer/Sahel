import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collector-view-reciepts',
  templateUrl: './collector-view-reciepts.component.html',
  styleUrls: ['./collector-view-reciepts.component.scss']
})
export class CollectorViewRecieptsComponent implements OnInit {

  reciepts = [
    {
      no: 1,
      date: "12-02-2024",
      store: "بنده الشرائع",

    },
    {
      no: 1,
      date: "12-02-2024",
      store: "بنده الشرائع",

    },
    {
      no: 1,
      date: "12-02-2024",
      store: "بنده الشرائع",

    }
  ]
  link = "/apps/my-information/app-collector-reciept-details"
  value = "تفاصيل"
  constructor() { }

  ngOnInit(): void {
  }

}
