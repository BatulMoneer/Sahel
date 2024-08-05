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

  addPrudectForm = this.fb.group({
    product_name: ['', [Validators.required]],
    price: ['', [Validators.required]],
    category_id: ['', [Validators.required]],
    quantity: ['', [Validators.required]]
    // product_image: ['', [Validators.required]],
    // product_barcode: ['', [Validators.required]],
  })



  categories_index = [];

  ngOnInit(): void {
    this.impApiService.get(category.categories_index).subscribe(data => {
      this.categories_index = data.data
      console.log(this.categories_index)
    })
  }

  addproduct() {
    this.submitted_create = true
    console.log(this.addPrudectForm.value)
    if (this.addPrudectForm.invalid) {
      console.log("error");
      return

    }
    this.impApiService.post(product.add_products, this.addPrudectForm.value).subscribe(data => {
      this.addPrudectForm = data.data

    })



}
}
