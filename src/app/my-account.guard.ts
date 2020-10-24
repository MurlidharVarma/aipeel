import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FireService } from './fire.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class MyAccountGuard implements CanActivate {

  constructor(private loginService: LoginService, private appService: FireService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginService.isLoggedIn){
        return true;
      }else{
        this.loginService.login().finally(()=>{
          this.router.navigate(['/myaccount']);
        });
      }
  }
  
}
