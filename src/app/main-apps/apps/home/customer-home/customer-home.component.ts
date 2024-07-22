import { Component, OnInit } from '@angular/core';

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

  shops = [
    { title: 'متجر بنده', image: '../../../assets/images/Panda.png', info: 'فرع الشرائع', productLink: '/apps/products/customer-view-products' },
    { title: 'متجر بنده', image: '../../../assets/images/Panda.png', info: 'فرع الشرائع', productLink: '/apps/products/customer-view-products' },
    { title: 'متجر بنده', image: '../../../assets/images/Panda.png', info: 'فرع الشرائع', productLink: '/apps/products/customer-view-products' },
    { title: 'متجر بنده', image: '../../../assets/images/Panda.png', info: 'فرع الشرائع', productLink: '/apps/products/customer-view-products' },
    { title: 'متجر بنده', image: '../../../assets/images/Panda.png', info: 'فرع الشرائع', productLink: '/apps/products/customer-view-products' },
  ];

  displayedShops: any[] = [];
  showMore: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.displayedShops = this.shops.slice(0, 4);
  }

  showAllShops(): void {
    if (!this.showMore) {
      this.displayedShops = this.shops;
      this.showMore = true;
    }
    else {
      this.displayedShops = this.shops.slice(0, 4);
      this.showMore = false;


    }

  }
}
