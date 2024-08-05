import { NgxSpinnerService } from 'ngx-spinner';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { category, product } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-customer-view-products',
  templateUrl: './customer-view-products.component.html',
  styleUrls: ['./customer-view-products.component.scss']
})
export class CustomerViewProductsComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  categories = [];
  category = [];
  showAllProducts = [];
  showAllCategories = false;
  visibleItems = 4;
  link = "/apps/products/customer-item-detail"

  constructor(
    private impApiService: ImpApiService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    const shop_id = localStorage.getItem('market');
    //const shop_id = 1;
    this.spinner.show()
    this.impApiService.get(category.categories_index).subscribe(data => {
      this.categories = data.map(cat => cat.category_name);
      this.category = this.categories.map(title => ({ title, currentIndex: 1, array: [] }));
      this.showAllProducts = new Array(this.category.length).fill(false);
    });

    this.impApiService.get(`${product.viewProducts}${shop_id}`).subscribe(data => {
      data.data.forEach(prod => {
        const catIndex = this.categories.findIndex(cat => cat === prod.category.name);
        if (catIndex > -1) {
          this.category[catIndex].array.push(prod);
          console.log(this.category[catIndex].array)
        } else {
          this.categories.push(prod.category.name);
          this.category.push({ title: prod.category.name, currentIndex: 1, array: [prod] });
        }
      });
      this.showAllProducts = new Array(this.category.length).fill(false);
      this.spinner.hide()


    });
  }

  getFilteredCategories() {
    return this.showAllCategories ? this.category : this.category.slice(0, 3);
  }

  scrollLeft(categoryIndex) {
    if (!this.isAtStart(this.category[categoryIndex].currentIndex)) {
      this.updateScrollPosition(categoryIndex, 'left');
    }
  }

  scrollRight(categoryIndex, array) {
    if (!this.isAtEnd(this.category[categoryIndex].currentIndex, array)) {
      this.updateScrollPosition(categoryIndex, 'right');
    }
  }

  private updateScrollPosition(categoryIndex, type) {
    const itemWidth = 300;
    let offset;
    if (type === 'right') {
      offset = this.category[categoryIndex].currentIndex * itemWidth;
      this.category[categoryIndex].currentIndex += 1;
    } else {
      offset = (this.category[categoryIndex].currentIndex - 2) * itemWidth;
      this.category[categoryIndex].currentIndex -= 1;
    }
    document.getElementById(`scrollContainer${categoryIndex}${this.category[categoryIndex].currentIndex}`)
      .setAttribute("style", `transform:translateX(-${offset}px)`);
  }

  isAtStart(currentIndex): boolean {
    return currentIndex === 1;
  }

  isAtEnd(currentIndex, array): boolean {
    return currentIndex - 1 >= array.length - this.visibleItems;
  }

  toggleShowAllCategories() {
    this.showAllCategories = !this.showAllCategories;
  }

  toggleShowAllProducts(categoryIndex: number): void {
    this.showAllProducts[categoryIndex] = !this.showAllProducts[categoryIndex];
  }

  setProd(id) {
    localStorage.setItem('product', id)
  }
}
