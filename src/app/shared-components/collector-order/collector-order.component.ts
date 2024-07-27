import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collector-order',
  templateUrl: './collector-order.component.html',
  styleUrls: ['./collector-order.component.scss']
})
export class CollectorOrderComponent implements OnInit {

  @Input() shopImg: string = "";
  @Input() shopName: string = "";
  @Input() noOfItems: number = 0;
  @Input() price: number = 0;
  @Input() collectPrice: number = 0;
  @Input() customerLocation: string = "";
  @Input() link: string = "";
  @Input() value: string = "";
  @Output() orderButtonClick = new EventEmitter<void>();

  onClick() {
    this.orderButtonClick.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
