import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manager-representative-registration-requests',
  templateUrl: './manager-representative-registration-requests.component.html',
  styleUrls: ['./manager-representative-registration-requests.component.scss']
})
export class ManagerRepresentativeRegistrationRequestsComponent implements OnInit {

  collectorsList = [
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
      collectorName: 'فؤاد عثمان',
      collectorAge: '31	',
      email: 'amir@gmail.com',
      phone: '0593644354',
      commercialRegistration: '//awfwaf//waf/waf',
      id: '1',
      reason: " "
    },
    {
      collectorName: 'فؤاد عثمان',
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

  collectorsList_ = [
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
      collectorName: 'فؤاد عثمان',
      collectorAge: '31	',
      email: 'amir@gmail.com',
      phone: '0593644354',
      commercialRegistration: '//awfwaf//waf/waf',
      id: '1',
      reason: " "
    },
    {
      collectorName: 'فؤاد عثمان',
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
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void { }

  open(content) {
    this.modalService.open(content, { centered: true })
  }

  filter_collector(user_filter) {
    this.collectorsList = this.collectorsList_
    this.collectorsList = this.collectorsList.filter((data) => {
      return data.collectorName.includes(user_filter)
    })
  }

  acceptance() { }

  rejection() { }

}
