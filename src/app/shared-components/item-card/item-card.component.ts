import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  title = 'شوفان'
  image = '../../../assets/images/Oats.jpg'
  info = '20 ريال'
  link = 'home'

  constructor() { }

  ngOnInit(): void {
  }

}
