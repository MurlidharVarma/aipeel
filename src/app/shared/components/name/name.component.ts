import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})
export class NameComponent implements OnInit {

  user: User;
  isLoggedIn: boolean;

  constructor(private loginService: LoginService) {
    this.loginService.user$.subscribe(user =>{
      this.user = user;
      this.isLoggedIn = this.loginService.isLoggedIn;
    })
  }

  ngOnInit() {}

}
