import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.scss']
})
export class RecieptComponent implements OnInit {

  @Input() no = 0
  @Input() date = ""
  @Input() store = ""
  @Input() link = ""
  @Input() value = ""

  constructor() { }

  ngOnInit(): void {
  }

}
