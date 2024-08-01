import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HOME } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})

export class AddNewProductComponent implements OnInit {

  addPrudectForm = this.fb.group({
    product_name:['',[Validators.required]],
    price:['',[Validators.required]],
    category_id:['',[Validators.required]],
    quantity:['',[Validators.required]],
    product_image:['',[Validators.required]],
    product_barcode:['',[Validators.required]],
  })


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private impApiService: ImpApiService
  ) { }

  productsSectionsList = [
    {
      section: 'الشاي والقهوة'
    },
  ]

  submitted_create = false;

  ngOnInit(): void {}

  addproduct() {
    this.submitted_create = true

    if(this.addPrudectForm.invalid){
      console.log("error");
      return

    }

    this.impApiService.post(HOME.list_users_markets , this.addPrudectForm.value)

    console.log(this.addPrudectForm.value);

    // this.router.navigate([""])
    // location.reload()
  }


}
