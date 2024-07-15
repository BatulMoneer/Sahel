import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {

  title = 'بندة'
  image = '../../../assets/images/Panda.png'
  info = 'فرع الشرائع - مخطط 2'
  link = 'home'

  constructor() { }

  ngOnInit(): void {
  }

}
