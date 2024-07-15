import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pink-button',
  templateUrl: './pink-button.component.html',
  styleUrls: ['./pink-button.component.scss']
})
export class PinkButtonComponent implements OnInit {

  link = "some link";
  value = "Some Text";
  constructor() { }

  ngOnInit(): void {
  }

}
