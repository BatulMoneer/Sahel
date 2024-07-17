import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ch-the-p-of-m-the-p',
  templateUrl: './ch-the-p-of-m-the-p.component.html',
  styleUrls: ['./ch-the-p-of-m-the-p.component.scss']
})
export class ChThePOfMThePComponent implements OnInit {

  constructor(private router:Router) { }

  navigateToProducts() {
    const inputId = (event.target as HTMLInputElement).id;
    if (inputId === 'add') {
      this.router.navigate(['/apps/products/app-add-new-product']);
    }
    else if (inputId === 'edit') {
      this.router.navigate(['/apps//products/app-edit-product']);
    }
  }

  ngOnInit(): void {
  }

}
