import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderState: number = 0;
  private productFound: boolean = false;

  constructor() { }

  hasOrder(): boolean {

    return true;
  }

  getOrderState(): number {
    console.log(this.orderState)

    return this.orderState;
  }

  setOrderState(state: number): void {
    console.log(state)
    this.orderState = state;
  }

  isProductFound(): boolean {
    return this.productFound;
  }

  setProductFound(found: boolean): void {
    this.productFound = found;
  }
}
