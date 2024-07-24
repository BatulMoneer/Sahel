import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manager-stores-registration-requests',
  templateUrl: './manager-stores-registration-requests.component.html',
  styleUrls: ['./manager-stores-registration-requests.component.scss']
})
export class ManagerStoresRegistrationRequestsComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

	open(content) {
		this.modalService.open(content ,{ centered: true })

	}

  arrayList = [
    {
      id: '1',   //القبول والرفض
      store: 'بنده	',
      branch: 'الشوقية',
      email: 'banda@gmail.com	',
      phone: '0593644354',
      commercialRegistration: '//awfwaf//waf/waf',
      notes: "تم الرفض بسبب عدم وجود تطابق بين البيانات و السجل التجاري",
      img:"../../../../../assets/images/Panda.png"
    },

  ]

  ngOnInit(): void {
  }

}
