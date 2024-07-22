import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-collector-information',
  templateUrl: './edit-collector-information.component.html',
  styleUrls: ['./edit-collector-information.component.scss']
})
export class EditCollectorInformationComponent implements OnInit {

  title1 = "عمل"
  title2 = "بيت"
  add_card = "اضف البطاقة"
  add_card_link = "link"
  wallet = 15.30;
  save = "حفظ"
  save_link = "/apps/my-information/app-collector-my-information"
  image = "../../../../../assets/images/Collector.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
