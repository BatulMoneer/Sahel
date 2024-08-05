import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { customer } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {
  more_shops = "المزيد";
  more_shops_link = "#";

  moreProducts = "عرض المنتجات";
  productLink = "/apps/products/customer-view-products";

  shops = [];

  displayedShops: any[] = [];
  showMore: boolean = false;

  constructor(private impApiService: ImpApiService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.showAllShops()
    this.spinner.show()

    this.impApiService.get(customer.viewMarkets).subscribe(data => {
      for (let index = 0; index < data.data.length; index++) {
        this.shops.push(data.data[index])
      }
      this.spinner.hide()

      console.log(this.shops)
    });
  }

  setShop(id) {
    localStorage.setItem('market', id)
    console.log(localStorage.getItem('market'))

  }

  showAllShops(): void {
    if (this.showMore) {
      this.displayedShops = this.shops;
      this.showMore = true;
    }
    else {
      if (this.shops.length < 4) {
        this.displayedShops = this.shops;
      }
      else {
        this.displayedShops = this.shops.slice(0, 4);
        this.showMore = false;
      }
    }

  }
}
