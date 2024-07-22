import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent implements OnInit {


  @Input() link: "";
  @Input() value: "";

  @Input() title = '';
  @Input() amount = 1;
  @Input() image = '';
  @Input() info = '';
  @Input() barcode = '';


  constructor() { }

  ngOnInit(): void {
  }

}
