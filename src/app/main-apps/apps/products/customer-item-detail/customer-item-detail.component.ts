import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddToCartPopComponent } from '../../popup/add-to-cart-pop/add-to-cart-pop.component';


@Component({
  selector: 'app-customer-item-detail',
  templateUrl: './customer-item-detail.component.html',
  styleUrls: ['./customer-item-detail.component.scss']
})
export class CustomerItemDetailComponent implements OnInit {


  constructor(private dialog: MatDialog) { }

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  array = [
    {
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1
    },
    {
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1
    },
    {
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1
    },
    {
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1
    },
    {
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1
    },
    {
      link: "/apps/products/customer-item-detail",
      value: "عرض",
      title: ' شوفان كويكر 500جم',
      image: '../../../../../assets/images/Oats.jpg',
      info: 15,
      barcode: '../../../../../assets/images/Barcode.png',
      amount: 1
    },
  ]

  current = {
    link: "/apps/products/customer-item-detail",
    value: "عرض",
    title: ' شوفان كويكر 500جم',
    image: '../../../../../assets/images/Oats.jpg',
    info: 15,
    barcode: '../../../../../assets/images/Barcode.png',
    amount: 1
  }

  link = "/apps/products/customer-cart"
  value = "اضف الى السلة"
  barcode = '../../../../../assets/images/Barcode.png';
  amount = 1;
  back = "عودة"
  back_link = "/apps/products/customer-view-products"

  currentIndex = 0;
  itemsCount = this.array.length;
  visibleItems = 4;


  addToCart() {
    let order;

    let retString = localStorage.getItem("cart")
    let retArray = JSON.parse(retString)
    order = retArray
    this.current.amount = this.amount
    if (order == null) {
      order = [this.current]
    }
    else {
      order.push(this.current)
    }

    let arr = JSON.stringify(order)
    localStorage.setItem('cart', arr)
    console.log("kkkk")

    this.openDialog()
  }
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

  openDialog(): void {
    this.dialog.open(AddToCartPopComponent);
  }


  ngOnInit(): void {

  }

}
