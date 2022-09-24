import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private route: Router,
    private autser: AuthService){}
    
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUser() ;
  }
  //Verify if is a active user to access to the postCrud
  checkUser(){
    if(this.autser.getStatus()){
      return true;
  }else {
    this.route.navigateByUrl('/authentication/login');
      return false;
  }
  

  }
}
