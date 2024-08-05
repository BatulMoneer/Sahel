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

  search: string = '';

  shops = [];

  displayedShops: any[] = [];
  showMore: boolean = false;

  constructor(private impApiService: ImpApiService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();

    this.impApiService.get(customer.viewMarkets).subscribe(data => {
      this.shops = data.data;
      this.spinner.hide();
      this.updateDisplayedShops();
      console.log(this.shops);
    });
  }

  filterShop(): void {
    if (this.search) {
      this.displayedShops = this.shops.filter(shop =>
        shop.name_user.toLowerCase().includes(this.search.toLowerCase())
      );
    } else {
      this.updateDisplayedShops();
    }
  }

  setShop(id: string): void {
    localStorage.setItem('market', id);
    console.log(localStorage.getItem('market'));
  }

  updateDisplayedShops(): void {
    if (this.showMore) {
      this.displayedShops = this.shops;
    } else {
      this.displayedShops = this.shops.slice(0, 4);
    }
  }

  toggleShowMore(): void {
    this.showMore = !this.showMore;
    this.updateDisplayedShops();
  }
}
