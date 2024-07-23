import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  submit = "تحديث";
  link = "home";
  constructor(){}

  arrayList = [
    {
      section: 'الشاي والقهوة'
    },
    {
      section: 'hyhgjg'
    },
    {
      section: 'الشاي والقهوة'
    },
    {
      section: 'الشاي والقهوة'
    },
    {
      section: 'الشاي والقهوة'
    },
    {
      section: 'الشاي والقهوة'
    },
    {
      section: 'الشاي والقهوة'
    },
  ]

  ngOnInit(): void {
  }

}
