import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  @Input() contName: string = '';
  @Input() pHolder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
