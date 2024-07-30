import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {


  @Input() more: any;
  @Input() submit: any;

  @Input() title = '';
  @Input() image = '';
  @Input() info = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
