import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { category, HOME, product } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})

export class AddNewProductComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private impApiService: ImpApiService
  ) { }

  submitted_create = false;

  attatchmentFile = {
    product_image: null,
    product_barcode: null
  }

  addPrudectForm = this.fb.group({
    product_name: ['', [Validators.required]],
    price: ['', [Validators.required]],
    category_id: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    product_image: [null],
    product_barcode: [null],
  })



  categories_index = [];

  ngOnInit(): void {
    this.impApiService.get(category.categories_index).subscribe(data => {
      this.categories_index = data
      console.log(this.categories_index)
    })
  }

  uploadAttachmenet(attach, object) {
    console.log(attach.target.files)
    this.attatchmentFile[object] = attach.target.files
  }

  addproduct() {


    this.submitted_create = true
    if (this.addPrudectForm.invalid) {
      console.log("error");
      return
    }

    let data = Object.assign({}, this.addPrudectForm.value)
    data.category_id = data.category_id.id

    let Formdata = new FormData()
    Formdata.append('product_name', data.product_name)
    Formdata.append('category_id', data.category_id)
    Formdata.append('quantity', data.quantity)
    Formdata.append('price', data.price)

    if (this.attatchmentFile.product_image) {
      Formdata.append('product_image', this.attatchmentFile.product_image[0])

    }

    if (this.attatchmentFile.product_barcode) {
      Formdata.append('product_barcode', this.attatchmentFile.product_barcode[0])

    }


console.log(Formdata)

    this.impApiService.post(product.add_products, Formdata).subscribe(data => {
      this.addPrudectForm = this.fb.group({
        product_name: ['', [Validators.required]],
        price: ['', [Validators.required]],
        category_id: ['', [Validators.required]],
        quantity: ['', [Validators.required]],
        product_image: [null],
        product_barcode: [null],
      })
    })
  }
}
