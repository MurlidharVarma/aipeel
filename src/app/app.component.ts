import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginService } from './login.service';
import { User } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/folder/home',
      icon: 'home'
    },
    {
      title: 'My Account',
      url: '/myaccount',
      icon: 'person'
    },
    // {
    //   title: 'My Orders',
    //   url: '/folder/Favorites',
    //   icon: 'cart'
    // },
    {
      title: 'My Cart',
      url: '/checkout',
      icon: 'cart'
    }, 
    {
      title: 'Contact Us',
      url: '/contact',
      icon: 'call'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  user: User;
  id: string;
  isLoggedIn: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginService: LoginService,
    private router: Router
  ) {
    this.initializeApp();
    this.loginService.user$.subscribe(user => {
      if(user && user!=null){
        this.user = user;
        this.id = user.getId();
      }else{
        this.user = null;
        this.id = null;
      }
      this.isLoggedIn = this.loginService.isLoggedIn;
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  loginUser(){
    this.loginService.login();
  }
  logoutUser(){
    this.loginService.signOut();
  }
  settings(){
    this.router.navigate(["/cfg/manage"])
  }
}
