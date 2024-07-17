import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-view-products',
  templateUrl: './customer-view-products.component.html',
  styleUrls: ['./customer-view-products.component.scss']
})
export class CustomerViewProductsComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  category = ["مواد تنظيف","أجهزة الكترونية","مواد غذائية"]
  link= "link"
  value= "عرض"
  title = 'شوفان';
  image = '../../../assets/images/Oats.jpg';
  info = '20 ريال';
  linkk= "link"
  valuee= "المزيد من الاصناف"

  currentIndex = 0;
  itemsCount = 9;
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
    const itemWidth = 300; // Adjust as needed
    const offset = this.currentIndex * itemWidth;
    this.scrollContainer.nativeElement.style.transform = `translateX(-${offset}px)`;
  }

  isAtStart(): boolean {
    return this.currentIndex === 0;
  }

  isAtEnd(): boolean {
    return this.currentIndex >= this.itemsCount - this.visibleItems;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
