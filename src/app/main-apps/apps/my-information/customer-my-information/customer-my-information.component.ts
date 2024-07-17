import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-my-information',
  templateUrl: './customer-my-information.component.html',
  styleUrls: ['./customer-my-information.component.scss']
})
export class CustomerMyInformationComponent implements OnInit {

  add_card = "اضف البطاقة"
  add_card_link = "link"
  constructor() { }

  ngOnInit(): void {
  }

}
