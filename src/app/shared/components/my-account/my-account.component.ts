import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CONFIG_OBJ } from 'src/app/config';
import { FireService } from 'src/app/fire.service';
import { LoginService } from 'src/app/login.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {

  appName: string;
  contactForm: FormGroup;

  msg: string;
  user: User
  constructor(private storage: Storage, private router: Router, private fb: FormBuilder, private appService: FireService, private loginService: LoginService) {
    this.appName = CONFIG_OBJ.appName;
    this.user = this.loginService.getUser();
    this.loginService.user$.subscribe((user: User)=>this.user=user);

    this.contactForm = this.fb.group({
      name: [this.user.getDisplayName(), [Validators.required]],
      email: [this.user.getEmail(), [ Validators.required, Validators.email]],
      phone: [null, [Validators.required]],
      address: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.msg = null;
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
      this.appService.saveAccount(contact).then((data)=>console.log(data));
      this.msg="Saved successfully!"
    }
  }
}
