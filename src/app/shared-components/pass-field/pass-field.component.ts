import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pass-field',
  templateUrl: './pass-field.component.html',
  styleUrls: ['./pass-field.component.scss']
})
export class PassFieldComponent implements OnInit {
  @Input() contName: string = '';
  @Input() pHolder: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
