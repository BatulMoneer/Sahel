import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-stores-registration-requests',
  templateUrl: './manager-stores-registration-requests.component.html',
  styleUrls: ['./manager-stores-registration-requests.component.scss']
})
export class ManagerStoresRegistrationRequestsComponent implements OnInit {

  constructor() { }

  arrayList = [
    {
      id: '1',   //القبول والرفض
      store: 'بنده	',
      branch: 'الشوقية',
      email: 'banda@gmail.com	',
      phone: '0593644354',
      commercialRegistration: '//awfwaf//waf/waf',
      reason: "تم الرفض بسبب عدم وجود تطابق بين البيانات و السجل التجاري"
    },
    {
      id: '1',
      store: 'بنده	',
      branch: 'البحيرات',
      email: 'ahmad@gmail.com	',
      phone: '0593644354',
      commercialRegistration: '//awfwaf//waf/waf',
      reason: "تم الرفض بسبب عدم وجود تطابق بين البيانات و السجل التجاري"
    },
    {
      id: '1',
      store: 'بنده	',
      branch: 'الشرائع',
      email: 'yaser@gmail.com	',
      phone: '0593644354',
      commercialRegistration: '//awfwaf//waf/waf',
      reason: "تم الرفض بسبب عدم وجود تطابق بين البيانات و السجل التجاري"
    },
    {
      id: '1',
      store: 'بنده	',
      branch: 'الشرائع',
      email: 'yaser@gmail.com	',
      phone: '0593644354',
      commercialRegistration: '//awfwaf//waf/waf',
      reason: "تم الرفض بسبب عدم وجود تطابق بين البيانات و السجل التجاري"
    },
    {
      id: '1',
      store: 'بنده	',
      branch: 'الشرائع',
      email: 'yaser@gmail.com	',
      phone: '0593644354',
      commercialRegistration: '//awfwaf//waf/waf',
      reason: "تم الرفض بسبب عدم وجود تطابق بين البيانات و السجل التجاري"
    },
  ]

  ngOnInit(): void {
  }

}
