import { Component, OnInit } from '@angular/core';

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

  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;
  passwordStrength: number;
  currentStoredPassword: string = this.current_password;

  savedCards = [
    { number: '9801 1235 4652 1532' },
    { number: '1112 3546 5215 3256' },
    { number: '9801 1235 4652 1532' }
  ];

  constructor() { }


  ngOnInit(): void {
    this.name = 'بتول';
    this.phoneNumber = '1234567890';
  }


  toggleNewPasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  checkPasswordStrength() {
    const password = this.newPassword;
    let strengthScore = 0;

    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (hasLowerCase) strengthScore++;
    if (hasUpperCase) strengthScore++;
    if (hasNumber) strengthScore++;

    if (password.length >= 6) strengthScore++;
    if (password.length >= 12) strengthScore++;

    this.passwordStrength = strengthScore;
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
      alert('رقم البطاقة يجب أن يكون 16 رقمًا');
      return;
    }

    if (!expirationDateRegex.test(this.expirationDate)) {
      alert('تاريخ الانتهاء يجب أن يكون بالصيغة MM/YY');
      return;
    }

    if (!confirmationCodeRegex.test(this.confirmationCode)) {
      alert('رمز التأكيد يجب أن يكون 3 أرقام');
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
      alert('يرجى ملء جميع الحقول');
    }
  }


  removeCard(cardNumber: string) {
    this.savedCards = this.savedCards.filter(card => card.number !== cardNumber);
  }

  saveChanges() {
    if (this.currentPassword !== this.currentStoredPassword) {
      alert('كلمة المرور الحالية غير صحيحة');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      alert('كلمات المرور الجديدة غير متطابقة');
      return;
    }

    if (this.passwordStrength < 4) {
      alert('كلمة المرور ضعيفة');
      return;
    }

    this.currentStoredPassword = this.newPassword;
    alert('كلمة المرور تم تحديثها بنجاح');


    console.log('User information saved:', {
      wallet: this.wallet,
      name: this.name,
      phoneNumber: this.phoneNumber,
      email: this.email,
      currentPassword: this.currentPassword,
      newPassword: this.newPassword,
      neighborhood: this.neighborhood,
      street: this.street,
      building: this.building,
      cardNumber: this.cardNumber,
      expirationDate: this.expirationDate,
      confirmationCode: this.confirmationCode
    });
  }
}
