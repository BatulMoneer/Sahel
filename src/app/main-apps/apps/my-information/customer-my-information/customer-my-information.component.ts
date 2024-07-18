import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-my-information',
  templateUrl: './customer-my-information.component.html',
  styleUrls: ['./customer-my-information.component.scss']
})
export class CustomerMyInformationComponent implements OnInit {

  title1 = "عمل"
  title2 = "بيت"
  add_card = "اضف البطاقة"
  add_card_link = "link"
  @Output() wallet = 15.30;
  constructor() { }

  ngOnInit(): void {
  }

}
