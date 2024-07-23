import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  constructor() { }

  arrayList = [
    {
      alert: 'يرغب متجر بن داوود بالإنضمام لقائمة المتاجر',
      dateAlert: '1 / 1 / 1446',
    },
    {
      alert: 'يرغب متجر بن داوود بالإنضمام لقائمة المتاجر',
      dateAlert: '1 / 1 / 1446',
    },
    {
      alert: 'يرغب متجر بن داوود بالإنضمام لقائمة المتاجر',
      dateAlert: '1 / 1 / 1446',
    },
    {
      alert: 'يرغب متجر بن داوود بالإنضمام لقائمة المتاجر',
      dateAlert: '1 / 1 / 1446',
    },
    {
      alert: 'يرغب متجر بن داوود بالإنضمام لقائمة المتاجر',
      dateAlert: '1 / 1 / 1446',
    },
  ]

  ngOnInit(): void {
  }

}
