export class Order {
  id: number;
  customerId: number;
  items: OrderItem[];
  status: string;
  shopImg: string;
  shopName: string;
  noOfItems: number;
  price: number;
  collectPrice: number;
  customerLocation: string;
}

export class OrderItem {
  productId: number;
  link: string;
  value: string;
  title: string;
  image: string;
  info: number;
  barcode: string;
  amount: number;
}
