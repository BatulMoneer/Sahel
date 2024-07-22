import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-view-products',
  templateUrl: './customer-view-products.component.html',
  styleUrls: ['./customer-view-products.component.scss']
})
export class CustomerViewProductsComponent implements OnInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  category = [
    {
      title: "مواد تنظيف",
      currentIndex: 1,
      array: [
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
      ]

    },
    {
      title: "أجهزة الكترونية",
      currentIndex: 1,
      array: [
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
      ]
    },
    {
      title: "مواد غذائية",
      currentIndex: 1,
      array: [
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
      ]
    },
    {
      title: "مواد غذائية",
      currentIndex: 1,
      array: [
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: 20,
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
      ]
    }
  ]

  link = "/apps/products/customer-item-detail";
  value = "عرض";
  title = 'شوفان';
  image = '../../../assets/images/Oats.jpg';
  info = 20;
  linkk = "link";
  valuee = "المزيد من الاصناف";
  visibleItems = 4;
  showAllProducts = new Array(this.category.length).fill(false);
  showAllCategories = false

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
    if (type == 'right') {
      const itemWidth = 300;
      const offset = this.category[categoryIndex].currentIndex * itemWidth;
      document.getElementById(`scrollContainer${categoryIndex}${this.category[categoryIndex].currentIndex}`).setAttribute("style", `transform:translateX(-${offset}px)`);
      this.category[categoryIndex].currentIndex = this.category[categoryIndex].currentIndex + 1;
    }

    if (type == 'left') {
      const itemWidth = 300;
      const offset = (this.category[categoryIndex].currentIndex - 2) * itemWidth;
      document.getElementById(`scrollContainer${categoryIndex}${this.category[categoryIndex].currentIndex}`).setAttribute("style", `transform:translateX(-${offset}px)`);
      this.category[categoryIndex].currentIndex = this.category[categoryIndex].currentIndex - 1;
    }
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
    console.log(this.showAllProducts[categoryIndex])
    this.showAllProducts[categoryIndex] = !this.showAllProducts[categoryIndex];
  }

  constructor() { }

  ngOnInit(): void { }
}
