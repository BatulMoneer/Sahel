import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manager-representative-registration-requests',
  templateUrl: './manager-representative-registration-requests.component.html',
  styleUrls: ['./manager-representative-registration-requests.component.scss']
})
export class ManagerRepresentativeRegistrationRequestsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  open(content) {
		this.modalService.open(content ,{ centered: true })
	}

  arrayList = [
    {
      collectorName: 'عامر عثمان',
      collectorAge: '31	',
      email: 'amir@gmail.com',
      phone: '0593644354',
      commercialRegistration: '//awfwaf//waf/waf',
      id: '1',
      reason: " "
    },
    {
      collectorName: 'عامر عثمان',
      collectorAge: '31	',
      email: 'amir@gmail.com',
      phone: '0593644354',
      commercialRegistration: '//awfwaf//waf/waf',
      id: '1',
      reason: " "
    },
    {
      collectorName: 'عامر عثمان',
      collectorAge: '31	',
      email: 'amir@gmail.com',
      phone: '0593644354',
      commercialRegistration: '//awfwaf//waf/waf',
      id: '1',
      reason: " "
    },
    {
      collectorName: 'عامر عثمان',
      collectorAge: '31	',
      email: 'amir@gmail.com',
      phone: '0593644354',
      commercialRegistration: '//awfwaf//waf/waf',
      id: '1',
      reason: " "
    },
    {
      collectorName: 'عامر عثمان',
      collectorAge: '31	',
      email: 'amir@gmail.com',
      phone: '0593644354',
      commercialRegistration: '//awfwaf//waf/waf',
      id: '1',
      reason: " "
    },
  ]

  ngOnInit(): void {
  }

  acceptance(){
  }

  rejection(){
  }

}
