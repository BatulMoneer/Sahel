import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-choose-product-will-update-it',
  templateUrl: './choose-product-will-update-it.component.html',
  styleUrls: ['./choose-product-will-update-it.component.scss']
})
export class ChooseProductWillUpdateItComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

	open(content) {
		this.modalService.open(content ,{ centered: true })

	}

  arrayList = [
    {
      id: '1',   //القبول والرفض
      prodcutName: 'صابون الببايا		',
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

  ngOnInit(): void {
  }

  navigateAndSend(){

  }

  delete(){

  }

}
