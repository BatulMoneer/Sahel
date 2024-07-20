import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Input() no = 0
  @Input() date = ""
  @Input() image = ""
  @Input() price = ""

  constructor() { }

  ngOnInit(): void {
  }

}
