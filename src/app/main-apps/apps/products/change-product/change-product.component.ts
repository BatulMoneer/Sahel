import { OrderService } from './../../../../service/order.service';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CancelProductPopComponent } from '../../popup/cancel-product-pop/cancel-product-pop.component';
import { ChangeHighProductPopComponent } from '../../popup/change-high-product-pop/change-high-product-pop.component';
import { ChangeLowProductPopComponent } from '../../popup/change-low-product-pop/change-low-product-pop.component';

@Component({
  selector: 'app-change-product',
  templateUrl: './change-product.component.html',
  styleUrls: ['./change-product.component.scss']
})
export class ChangeProductComponent implements OnInit {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;




  array = [
    { product: 'شوفان', image: '../../../assets/images/Oats.jpg', info: 20 },
    { product: 'شوفان', image: '../../../assets/images/Oats.jpg', info: 20 },
    { product: 'شوفان', image: '../../../assets/images/Oats.jpg', info: 20 },
    { product: 'شوفان', image: '../../../assets/images/Oats.jpg', info: 20 },
    { product: 'شوفان', image: '../../../assets/images/Oats.jpg', info: 20 },
    { product: 'شوفان', image: '../../../assets/images/Oats.jpg', info: 20 }
  ];

  link = "/apps/products/order-state";
  value = "استبدال";
  value2 = "عودة";
  title = 'شوفان كويكر 500جم';
  image = '../../../../../assets/images/Oats.jpg';
  info = 15;
  barcode = '../../../../../assets/images/Barcode.png';

  currentIndex = 0;
  itemsCount = this.array.length;
  visibleItems = 4;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
  }


  changeProduct(newProductPrice: number): void {
    if (newProductPrice > this.info) {
      this.orderService.setProductFound(true);
      this.dialog.open(ChangeHighProductPopComponent);
    } else {
      this.orderService.setProductFound(true);
      this.dialog.open(ChangeLowProductPopComponent);


    }
  }


  cancelProduct(): void {
    this.orderService.setProductFound(true);
    this.dialog.open(CancelProductPopComponent);
  }


  goBack(): void {
    this.router.navigate(['/apps/products/order-state']);
  }

  scrollLeft(): void {
    if (!this.isAtStart()) {
      this.currentIndex--;
      this.updateScrollPosition();
    }
  }

  scrollRight(): void {
    if (!this.isAtEnd()) {
      this.currentIndex++;
      this.updateScrollPosition();
    }
  }

  private updateScrollPosition(): void {
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
}
