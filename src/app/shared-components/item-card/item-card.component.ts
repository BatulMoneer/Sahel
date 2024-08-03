import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Output() itemButtonClick = new EventEmitter<void>();


  @Input() link: "";
  @Input() value: "";

  @Input() title = '';
  @Input() image = '';
  @Input() info = '';


  onClick() {
    this.itemButtonClick.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
