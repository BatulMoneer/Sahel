import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoUpdatedPopComponent } from '../../popup/info-updated-pop/info-updated-pop.component';
import { MatDialog } from '@angular/material/dialog';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { auth } from 'src/app/constant/Routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-my-information',
  templateUrl: './customer-my-information.component.html',
  styleUrls: ['./customer-my-information.component.scss']
})
export class CustomerMyInformationComponent implements OnInit {
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
  expirationDate: string = '';
  confirmationCode: string = '';


  savedCards = [
    { number: '9801 1235 4652 1532' },
    { number: '1112 3546 5215 3256' },
    { number: '9801 1235 4652 1532' }
  ];

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private impApiService: ImpApiService,
    private router: Router) { }

  openDialog(): void {
    this.dialog.open(InfoUpdatedPopComponent);

  }

  ngOnInit(): void {
    this.name = 'بتول';
    this.phoneNumber = '1234567890';
  }


  formatCardNumber() {
    this.cardNumber = this.cardNumber.replace(/\s+/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
  }

  addCard() {
    const cardNumberRegex = /^\d{16}$/;
    const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const confirmationCodeRegex = /^\d{3}$/;

    const sanitizedCardNumber = this.cardNumber.replace(/\s/g, '');

    if (!cardNumberRegex.test(sanitizedCardNumber)) {
      this.snackBar.open('رقم البطاقة يجب أن يكون 16 رقمًا', 'إغلاق', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
      return;
    }

    if (!expirationDateRegex.test(this.expirationDate)) {
      this.snackBar.open('تاريخ الانتهاء يجب أن يكون بالصيغة MM/YY', 'إغلاق', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
      return;
    }

    if (!confirmationCodeRegex.test(this.confirmationCode)) {
      this.snackBar.open('رمز التأكيد يجب أن يكون 3 أرقام', 'إغلاق', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
      return;
    }

    if (sanitizedCardNumber && this.expirationDate && this.confirmationCode) {
      this.savedCards.push({
        number: this.cardNumber
      });

      this.cardNumber = '';
      this.expirationDate = '';
      this.confirmationCode = '';
    } else {
      this.snackBar.open('يرجى ملء جميع الحقول', 'إغلاق', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    }
  }

  removeCard(cardNumber: string) {
    this.savedCards = this.savedCards.filter(card => card.number !== cardNumber);
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
      expirationDate: this.expirationDate,
      confirmationCode: this.confirmationCode
    });
  }

}
