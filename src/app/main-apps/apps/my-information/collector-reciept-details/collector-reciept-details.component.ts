import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collector-reciept-details',
  templateUrl: './collector-reciept-details.component.html',
  styleUrls: ['./collector-reciept-details.component.scss']
})
export class CollectorRecieptDetailsComponent implements OnInit {

  no = 1;
  date = "12-02-2024";
  store = "بنده الشرائع";
  card = 3425738203735628
  name = "قصي سالم بيدر"
  amount = 1309

  constructor() { }

  ngOnInit(): void {
  }

}
