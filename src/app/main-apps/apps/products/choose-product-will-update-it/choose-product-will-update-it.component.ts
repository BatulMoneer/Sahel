import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-choose-product-will-update-it',
  templateUrl: './choose-product-will-update-it.component.html',
  styleUrls: ['./choose-product-will-update-it.component.scss']
})
export class ChooseProductWillUpdateItComponent implements OnInit {

  productsList = [
    {
      id: '1',   //القبول والرفض
      prodcutName: 'الكركم',
      productPrice: '10 ريال	',
      productSection: 'العناية الشخصية	',
      quntity: '780 منتج	',
      productImage: "../../../../../assets/images/Oats.jpg",
      productBarcode: "../../../../../assets/images/Barcode.png",
    },
    {
      id: '1',   //القبول والرفض
      prodcutName: 'صابون الببايا		',
      productPrice: '10 ريال	',
      productSection: 'العناية الشخصية	',
      quntity: '780 منتج	',
      productImage: "../../../../../assets/images/Oats.jpg",
      productBarcode: "../../../../../assets/images/Barcode.png"
    },
    {
      id: '1',   //القبول والرفض
      prodcutName: 'صابون الببايا		',
      productPrice: '10 ريال	',
      productSection: 'العناية الشخصية	',
      quntity: '780 منتج	',
      productImage: "../../../../../assets/images/Oats.jpg",
      productBarcode: "../../../../../assets/images/Barcode.png"
    },
    {
      id: '1',   //القبول والرفض
      prodcutName: 'صابون الببايا		',
      productPrice: '10 ريال	',
      productSection: 'العناية الشخصية	',
      quntity: '780 منتج	',
       productImage: "../../../../../assets/images/Oats.jpg",
      productBarcode: "../../../../../assets/images/Barcode.png"
    },
    {
      id: '1',   //القبول والرفض
      prodcutName: 'صابون الببايا		',
      productPrice: '10 ريال	',
      productSection: 'العناية الشخصية	',
      quntity: '780 منتج	',
      productImage: "../../../../../assets/images/Oats.jpg",
      productBarcode: "../../../../../assets/images/Barcode.png"
    },
    {
      id: '1',   //القبول والرفض
      prodcutName: 'صابون الببايا		',
      productPrice: '10 ريال	',
      productSection: 'العناية الشخصية	',
      quntity: '780 منتج	',
      productImage: "../../../../../assets/images/Oats.jpg",
      productBarcode: "../../../../../assets/images/Barcode.png"
    },
    {
      id: '1',   //القبول والرفض
      prodcutName: 'صابون الببايا		',
      productPrice: '10 ريال	',
      productSection: 'العناية الشخصية	',
      quntity: '780 منتج	',
      productImage: "../../../../../assets/images/Oats.jpg",
      productBarcode: "../../../../../assets/images/Barcode.png"
    },
  ]
  productsList_ = [
    {
      id: '1',   //القبول والرفض
      prodcutName: 'الكركم',
      productPrice: '10 ريال	',
      productSection: 'العناية الشخصية	',
      quntity: '780 منتج	',
      productImage: "../../../../../assets/images/Oats.jpg",
      productBarcode: "../../../../../assets/images/Barcode.png",
    },
    {
      id: '1',   //القبول والرفض
      prodcutName: 'صابون الببايا		',
      productPrice: '10 ريال	',
      productSection: 'العناية الشخصية	',
      quntity: '780 منتج	',
      productImage: "../../../../../assets/images/Oats.jpg",
      productBarcode: "../../../../../assets/images/Barcode.png"
    },
    {
      id: '1',   //القبول والرفض
      prodcutName: 'صابون الببايا		',
      productPrice: '10 ريال	',
      productSection: 'العناية الشخصية	',
      quntity: '780 منتج	',
      productImage: "../../../../../assets/images/Oats.jpg",
      productBarcode: "../../../../../assets/images/Barcode.png"
    },
    {
      id: '1',   //القبول والرفض
      prodcutName: 'صابون الببايا		',
      productPrice: '10 ريال	',
      productSection: 'العناية الشخصية	',
      quntity: '780 منتج	',
       productImage: "../../../../../assets/images/Oats.jpg",
      productBarcode: "../../../../../assets/images/Barcode.png"
    },
    {
      id: '1',   //القبول والرفض
      prodcutName: 'صابون الببايا		',
      productPrice: '10 ريال	',
      productSection: 'العناية الشخصية	',
      quntity: '780 منتج	',
      productImage: "../../../../../assets/images/Oats.jpg",
      productBarcode: "../../../../../assets/images/Barcode.png"
    },
    {
      id: '1',   //القبول والرفض
      prodcutName: 'صابون الببايا		',
      productPrice: '10 ريال	',
      productSection: 'العناية الشخصية	',
      quntity: '780 منتج	',
      productImage: "../../../../../assets/images/Oats.jpg",
      productBarcode: "../../../../../assets/images/Barcode.png"
    },
    {
      id: '1',   //القبول والرفض
      prodcutName: 'صابون الببايا		',
      productPrice: '10 ريال	',
      productSection: 'العناية الشخصية	',
      quntity: '780 منتج	',
      productImage: "../../../../../assets/images/Oats.jpg",
      productBarcode: "../../../../../assets/images/Barcode.png"
    },
  ]

  constructor(private modalService: NgbModal) {}

	open(content) {
		this.modalService.open(content ,{ centered: true })
	}

  ngOnInit(): void { }

  filter_products(user_filter){
    this.productsList = this.productsList_
   this.productsList =  this.productsList.filter((data)=>{
       return data.prodcutName.includes(user_filter)
    })}

  navigateAndSend(){}

  delete(){ }

}
