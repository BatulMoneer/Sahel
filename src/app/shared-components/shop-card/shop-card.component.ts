import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {


  @Input() more :  any;
  @Input() submit : any;

  @Input() title = '';
  @Input() image = '';
  @Input() info = '';

  constructor() {
    console.log(this.more)
    console.log(this.submit)
   }

  ngOnInit(): void {
    console.log(this.more)
    console.log(this.submit)
  }

}
