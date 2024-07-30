import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ImpApiService } from 'src/app/services/imp-api.service';
@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private impApiService: ImpApiService
  ) { }

  arrayList = [
    {
      section: 'الشاي والقهوة'
    },
  ]

  formData: FormGroup;
  submitted_create = false;

  ngOnInit(): void {
  }

  addproduct() {
    this.router.navigate([""])
  }
}
