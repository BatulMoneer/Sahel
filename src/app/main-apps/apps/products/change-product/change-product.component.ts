import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }


  changeProduct(newProductPrice: number): void {
    if (newProductPrice > this.info) {
      this.snackBar.open('هذا المنتج أغلى. هل تريد متابعة الدفع؟', 'نعم', {
        duration: 5000,
        panelClass: ['custom-snackbar'],
        verticalPosition: 'top',
        horizontalPosition: 'center'
      }).onAction().subscribe(() => {
        this.proceedToPayment();
      });
    } else {
      this.snackBar.open('تم استبدال المنتج بنجاح', 'إغلاق', { duration: 3000 });
    }
  }

  proceedToPayment(): void {
    this.router.navigate(['/payment']);
  }

  cancelProduct(): void {
    this.snackBar.open('تم إلغاء المنتج بنجاح', 'إغلاق', { duration: 3000 });
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
