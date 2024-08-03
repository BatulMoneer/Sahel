import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {

  @Output() shopButtonClick = new EventEmitter<void>();


  @Input() link: any;
  @Input() value: any;

  @Input() title = '';
  @Input() image = '';
  @Input() info = '';

  onClick() {
    this.shopButtonClick.emit();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
