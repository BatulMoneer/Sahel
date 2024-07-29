import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
<<<<<<< HEAD
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 400) { }
      if (err.status === 401) { }
      if (err.status === 403) { }
      if (err.status === 422) { }
      if (err.status === 429) { }
      if (err.status === 500) { }
      return throwError(err);
    }))
=======
    return next.handle(request).pipe(
      catchError(err => {
        let message = '';
        let action = '';
        /*
                if (err.status === 400) {
                  message = 'حدثت مشكلة في طلبك. يرجى التحقق والمحاولة مرة أخرى.';
                  action = 'طلب غير صحيح';
                }
                if (err.status === 401) {
                  message = 'انتهت صلاحية جلستك. يرجى تسجيل الدخول مرة أخرى.';
                  action = 'غير مصرح';
                  this.router.navigate(['/auth/login']);
                }
                if (err.status === 403) {
                  message = 'ليس لديك إذن لأداء هذا الإجراء.';
                  action = 'ممنوع';
                  this.router.navigate(['/auth/not-found']);
                }
                if (err.status === 422) {
                  message = 'كانت هناك أخطاء في التحقق من صحة تقديمك. يرجى تصحيحها والمحاولة مرة أخرى.';
                  action = 'كيان غير قابل للمعالجة';
                }
                if (err.status === 429) {
                  message = 'لقد قمت بإرسال عدد كبير جدًا من الطلبات. يرجى المحاولة مرة أخرى لاحقًا.';
                  action = 'طلبات كثيرة جدًا';
                }
                if (err.status === 500) {
                  message = 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى لاحقًا.';
                  action = 'خطأ داخلي في الخادم';
                }

                if (message) {
                  this.snackBar.open(message, action, {
                    duration: 5000,
                    horizontalPosition: 'right',
                    verticalPosition: 'top',
                  });
                }
        */
        return throwError(err);
      })
    );
>>>>>>> 43ed0d7136a4d9050c5b9a2a0fd5b403387c15c9
  }


  constructor() { }
}
