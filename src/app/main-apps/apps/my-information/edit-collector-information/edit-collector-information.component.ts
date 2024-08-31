import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { cardinfo } from 'src/app/constant/Routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

@Component({
  selector: 'app-edit-collector-information',
  templateUrl: './edit-collector-information.component.html',
  styleUrls: ['./edit-collector-information.component.scss']
})
export class EditCollectorInformationComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private dialog: MatDialog,
    private impApiService: ImpApiService,
    private router: Router,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) { }

  title1 = "عمل"
  title2 = "بيت"
  add_card = "اضف البطاقة"
  add_card_link = "link"
  wallet = 15.30;
  save = "حفظ"
  save_link = "/apps/my-information/app-collector-my-information"
  image = "../../../../../assets/images/Collector.jpg"
  submitted_crearte;
  card_id;
  cardForm: FormGroup;

  savedCards = [
    { number: '9801 1235 4652 1532' },
    { number: '1112 3546 5215 3256' },
    { number: '9801 1235 4652 1532' }
  ];

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      bank_name: ['', [
        Validators.required
      ]],
      iban: ['', [
        Validators.required,
      ]],
      card_number: ['', [
        Validators.required,
        Validators.pattern('^([0-9]{16})$')
      ]],
      name_on_card: ['', [
        Validators.required,

      ]],
      expiry_date: ['', [
        Validators.required,
        Validators.pattern('^(0[1-9]|1[0-2])\/([0-9]{2})$')

      ]],
      type_of_card: ['', [
        Validators.required,
      ]]
    });
  }


  addCard() {
    this.submitted_crearte = true
    this.spinner.show()
    if (this.cardForm.invalid) {
      this.spinner.hide()
      return null;
    }
    this.impApiService.post(cardinfo.cardCreate, this.cardForm.value).subscribe(data => {
    },
      error => {
        console.log((error));
      })
    this.spinner.hide()
  }

  removeCard(cardNumber: string) {
    this.impApiService.delete(`${cardinfo.cardDelete}${this.card_id}`).subscribe(data => {
    },
      error => {
        console.log((error));
      })
  }

}
