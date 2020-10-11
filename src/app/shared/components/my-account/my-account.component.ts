import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CONFIG_OBJ } from 'src/app/config';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {

  appName: string;
  contactForm: FormGroup;

  constructor(private storage: Storage, private router: Router, private fb: FormBuilder) {
    this.appName = CONFIG_OBJ.appName;

    this.contactForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [ Validators.required, Validators.email]],
      phone: [null, [Validators.required]],
      address: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.storage.get("contact").then(contact => {
      this.contactForm.setValue(contact);
      this.contactForm.updateValueAndValidity();
    })
  }

  goBack(){
    this.router.navigate([".."])
  }

  save(){
    if(this.contactForm && this.contactForm.valid){
      let contact = this.contactForm.getRawValue();
      this.storage.set("contact", contact);
    }
  }
}
