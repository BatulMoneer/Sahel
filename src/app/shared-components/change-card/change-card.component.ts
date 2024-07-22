import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-card',
  templateUrl: './change-card.component.html',
  styleUrls: ['./change-card.component.scss']
})
export class ChangeCardComponent implements OnInit {


  @Output() change = new EventEmitter<void>();
  @Input() value: "";

  @Input() title = '';
  @Input() image = '';
  @Input() info = '';
  @Input() barcode = '';

  onChange(): void {
    this.change.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
