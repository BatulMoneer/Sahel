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
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: '20 ريال',
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
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: '20 ريال',
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
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
        {
          link: "/apps/products/customer-item-detail",
          value: "عرض",
          product: 'شوفان',
          image: '../../../assets/images/Oats.jpg',
          info: '20 ريال',
          linkk: "link",
          valuee: "المزيد من الاصناف",
        },
      ]
    }
  ]

  link = "/apps/products/customer-item-detail"
  value = "عرض"
  title = 'شوفان';
  image = '../../../assets/images/Oats.jpg';
  info = '20 ريال';
  linkk = "link"
  valuee = "المزيد من الاصناف"

  // currentIndex = 0;
  // itemsCount = 9;
  visibleItems = 4;

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

    console.log(this.category[categoryIndex].currentIndex)


    if (type == 'right') {
      const itemWidth = 300;
      const offset = this.category[categoryIndex].currentIndex * itemWidth;
      document.getElementById(`scrollContainer${categoryIndex}${this.category[categoryIndex].currentIndex}`).setAttribute("style", `transform:translateX(-${offset}px)`);
      this.category[categoryIndex].currentIndex = this.category[categoryIndex].currentIndex + 1
    }


    if (type == 'left') {
      const itemWidth = 300;
      const offset = (this.category[categoryIndex].currentIndex - 2) * itemWidth;
      document.getElementById(`scrollContainer${categoryIndex}${this.category[categoryIndex].currentIndex}`).setAttribute("style", `transform:translateX(-${offset}px)`);
      this.category[categoryIndex].currentIndex = this.category[categoryIndex].currentIndex - 1
    }

    console.log(this.category[categoryIndex].currentIndex)




  }

  isAtStart(currentIndex): boolean {
    return currentIndex === 1;
  }

  isAtEnd(currentIndex, array): boolean {
    return currentIndex - 1 >= array.length - this.visibleItems;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
