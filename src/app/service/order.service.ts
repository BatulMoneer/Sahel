import { Injectable } from '@angular/core';
import { Order } from '../model/order.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderState: number = 0;
  private productFound: boolean = false;
  private allProductFound: boolean = false;
  private isActive: boolean = false;
  private orders: Order[] = [];
  private currentOrderID: number;
  private hasOrder: boolean = false;

  constructor() { }

  createOrder(order: Order): Order {
    order.id = this.orders.length + 1;
    this.orders.push(order);
    this.saveOrders();
    return order;
  }

  getOrders(): Order[] {
    this.loadOrders();
    return this.orders;
  }

  getOrderById(orderId: number): Order | undefined {
    return this.orders.find(order => order.id === orderId);
  }

  updateOrder(order: Order): Order {
    const index = this.orders.findIndex(o => o.id === order.id);
    if (index !== -1) {
      this.orders[index] = order;
      this.saveOrders();
    }
    return order;
  }

  deleteOrder(orderId: number): void {
    this.orders = this.orders.filter(order => order.id !== orderId);
    this.saveOrders();
  }

  private saveOrders(): void {
    localStorage.setItem('orders', JSON.stringify(this.orders));

  }

  private loadOrders(): void {
    const ordersJson = localStorage.getItem('orders');
    if (ordersJson) {
      this.orders = JSON.parse(ordersJson);
    } else {
      this.orders = [];
    }
  }



  setStatus(isActive: boolean): void {
    this.isActive = isActive;
  }

  getStatus(): boolean {
    return this.isActive;
  }



  getOrderState(): number {
    return this.loadOrderState();
  }

  setOrderState(state: number): void {
    localStorage.setItem('orderState', state.toString());
  }

  private loadOrderState(): number {
    const state = localStorage.getItem('orderState');
    if (state !== null) {
      this.orderState = parseInt(state, 10);
    } else {
      this.orderState = 0;
    }
    return this.orderState;
  }




  isProductFound(): boolean {
    return this.loadProductFound();
  }

  setProductFound(found: boolean): void {
    this.productFound = found;
    localStorage.setItem('productFound', JSON.stringify(found));
  }

  private loadProductFound(): boolean {
    const found = localStorage.getItem('productFound');
    if (found !== null) {
      this.productFound = JSON.parse(found);
    } else {
      this.productFound = false;
    }
    return this.productFound;
  }




  isAllProductFound(): boolean {
    return this.loadAllProductFound();
  }

  setAllProductFound(found: boolean): void {
    this.allProductFound = found;
    localStorage.setItem('allProductFound', JSON.stringify(found));
  }

  private loadAllProductFound(): boolean {
    const found = localStorage.getItem('allProductFound');
    if (found !== null) {
      this.allProductFound = JSON.parse(found);
    } else {
      this.allProductFound = false;
    }
    return this.allProductFound;
  }




  getHasOrder(): boolean {
    return this.loadHasOrder();
  }

  setHasOrder(yes: boolean): void {
    this.hasOrder = yes;
    localStorage.setItem('hasOrder', JSON.stringify(yes));
  }

  private loadHasOrder(): boolean {
    const yes = localStorage.getItem('hasOrder');
    if (yes !== null) {
      this.hasOrder = JSON.parse(yes);
    } else {
      this.hasOrder = false;
    }
    return this.hasOrder;
  }




  setCurrentOrderID(orderID: number): void {
    this.currentOrderID = orderID;
    localStorage.setItem('currentOrderID', orderID.toString());
  }

  getCurrentOrderID(): number | null {
    return this.loadCurrentOrderID();
  }

  private loadCurrentOrderID(): number | null {
    const orderID = localStorage.getItem('currentOrderID');
    if (orderID !== null) {
      this.currentOrderID = parseInt(orderID, 10);
    } else {
      this.currentOrderID = null;
    }
    return this.currentOrderID;
  }

}
