import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderState: number = 0;
  private productFound: boolean = true;
  private currentUser: number = 1;
  private isActive: boolean = false;

  constructor() { }

  setStatus(isActive: boolean): void {
    this.isActive = isActive;
  }

  getStatus(): boolean {
    return this.isActive;
  }

  setUser(user) {
    this.currentUser = user
  }
  getUser(): number {
    return this.currentUser

  }

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
