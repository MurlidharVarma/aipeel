import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONFIG_OBJ } from 'src/app/config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  appName: string;

  constructor(private router: Router) {
    this.appName = CONFIG_OBJ.appName;
  }

  ngOnInit() {}

  contactUs(){
    window.location.href = `https://api.whatsapp.com/send?phone=${CONFIG_OBJ.phone}`;
  }

  goBack(){
    this.router.navigate([".."])
  }
}
