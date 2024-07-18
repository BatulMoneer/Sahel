import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer-item-detail',
  templateUrl: './customer-item-detail.component.html',
  styleUrls: ['./customer-item-detail.component.scss']
})
export class CustomerItemDetailComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  array = [
    {
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      product: 'شوفان',
      image: '../../../assets/images/Oats.jpg',
      info: '20 ريال',
    },
    {
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      product: 'شوفان',
      image: '../../../assets/images/Oats.jpg',
      info: '20 ريال',
    },
    {
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      product: 'شوفان',
      image: '../../../assets/images/Oats.jpg',
      info: '20 ريال',
    },
    {
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      product: 'شوفان',
      image: '../../../assets/images/Oats.jpg',
      info: '20 ريال',
    },
    {
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      product: 'شوفان',
      image: '../../../assets/images/Oats.jpg',
      info: '20 ريال',
    },
    {
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      product: 'شوفان',
      image: '../../../assets/images/Oats.jpg',
      info: '20 ريال',
    },
  ]


  link = "/apps/products/customer-cart"
  value = "اضف الى السلة"
  value2 = "عرض"
  link2 = "/apps/products/customer-item-detail"
  title = 'شوفان كويكر  500جم';
  image = '../../../../../assets/images/Oats.jpg';
  price = '20';
  barcode = '../../../../../assets/images/Barcode.png';
  amount = 1;
  back = "عودة"
  back_link = "/apps/products/customer-view-products"

  currentIndex = 0;
  itemsCount = this.array.length;
  visibleItems = 4;

  scrollLeft() {
    if (!this.isAtStart()) {
      this.currentIndex--;
      this.updateScrollPosition();
    }
  }

  scrollRight() {
    if (!this.isAtEnd()) {
      this.currentIndex++;
      this.updateScrollPosition();
    }
  }

  private updateScrollPosition() {
    const itemWidth = 300;
    const offset = this.currentIndex * itemWidth;
    this.scrollContainer.nativeElement.style.transform = `translateX(-${offset}px)`;
  }

  isAtStart(): boolean {
    return this.currentIndex === 0;
  }

  isAtEnd(): boolean {
    return this.currentIndex >= this.itemsCount - this.visibleItems;
  }


  inc() {
    this.amount += 1;
  }

  dec() {
    if (this.amount > 0) {
      this.amount -= 1;
    }
  }

  constructor() { }

  ngOnInit(): void {

  }

}
