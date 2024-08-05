import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoUpdatedPopComponent } from '../../popup/info-updated-pop/info-updated-pop.component';
import { MatDialog } from '@angular/material/dialog';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { auth, cardinfo } from 'src/app/constant/Routes';
import { Router } from '@angular/router';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';

@Component({
  selector: 'app-customer-my-information',
  templateUrl: './customer-my-information.component.html',
  styleUrls: ['./customer-my-information.component.scss']
})
export class CustomerMyInformationComponent implements OnInit {


  constructor(
    private toastr: ToastrService,
    private dialog: MatDialog,
    private impApiService: ImpApiService,
    private router: Router,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) { }

  cardForm: FormGroup;
  title1 = "عمل";
  title2 = "بيت";
  add_card = "اضف البطاقة";
  save = "حفظ";

  wallet: number = 15.30;
  name: string = 'بتول';
  phoneNumber: string = '0523145678';
  email: string = 'bbbb@gmail.com';
  currentPassword: string = ""
  current_password: string = '123456789';
  newPassword: string = '';
  confirmPassword: string = '';
  neighborhood: string = 'الشرائع';
  street: string = 'الفردوس';
  building: string = '1752';

  cardNumber: string = '';
  bankName: string = '';
  iban: string = '';
  cardType: string = '';
  nameOnCard: string = '';
  expirationDate: string = '';
  submitted_crearte;
  card_id;

  savedCards = [
    { number: '9801 1235 4652 1532' },
    { number: '1112 3546 5215 3256' },
    { number: '9801 1235 4652 1532' }
  ];


  openDialog(): void {
    this.dialog.open(InfoUpdatedPopComponent);
  }

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

  signOut() {
    this.impApiService.post(auth.logout, localStorage.getItem('token')).subscribe(data => {

    })
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token")

    this.router.navigate(['/auth/login']);
  }
  mylatlng: any = {
    lat: null,
    lng: null
  };
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log('latitude', position.coords.latitude);
        console.log('longitude', position.coords.longitude);
        this.mylatlng.lat = position.coords.latitude;
        this.mylatlng.lng = position.coords.longitude;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  saveChanges() {

    console.log('User information saved:', {
      wallet: this.wallet,
      name: this.name,
      phoneNumber: this.phoneNumber,
      email: this.email,
      neighborhood: this.neighborhood,
      street: this.street,
      building: this.building,
      cardNumber: this.cardNumber,
      expirationDate: this.expirationDate
    });
  }

}
