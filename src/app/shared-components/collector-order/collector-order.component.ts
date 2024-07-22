import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collector-order',
  templateUrl: './collector-order.component.html',
  styleUrls: ['./collector-order.component.scss']
})
export class CollectorOrderComponent implements OnInit {

  @Input() shopImg = ""
  @Input() shopName = ""
  @Input() noOfItems = 0
  @Input() price = 0
  @Input() collectPrice = 0
  @Input() customerLocation = ""
  @Input() link = ""
  @Input() value = ""

  constructor() { }

  ngOnInit(): void {
  }

}
