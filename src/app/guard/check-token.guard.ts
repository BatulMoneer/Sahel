import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckTokenGuard implements CanActivate {

  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem("token");

    if (token) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      if (currentUser.user_info.user_type_id == 1) {
        this.router.navigate(["/apps/home/app-customer-home"])
      }
      if (currentUser.user_info.user_type_id == 2) {
        this.router.navigate(["/apps/home/app-collector-home"])
      }
      if (currentUser.user_info.user_type_id == 3) {
        this.router.navigate(["/apps/home/app-store-home"])
      }
      if (currentUser.user_info.user_type_id == 4) {
        this.router.navigate(["/apps/home/app-admin-home"])
      }
    }
    return true;
  }

}
