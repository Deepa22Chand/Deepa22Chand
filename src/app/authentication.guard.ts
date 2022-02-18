import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isUserLoggedIn();
  }

  isUserLoggedIn(){
    let userToken = localStorage.getItem("userAccessToken") ? JSON.parse(localStorage.getItem("userAccessToken")) : false;
    if(userToken){
      console.log("successfully log in ")
      return true;
    }
    else {
      console.log("please try again!")
      this.router.navigateByUrl("login");
      return false;
    }
  }
  logout(){
    localStorage.removeItem("userAccessToken");
     this.router.navigate(['']);
  }
}
