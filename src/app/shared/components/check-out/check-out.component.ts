import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CartService } from 'src/app/cart.service';
import { CONFIG_OBJ } from 'src/app/config';
import { FireService } from 'src/app/fire.service';
import { CartItem } from '../../models/cart-item';
import { Order } from '../../models/order';
// import { v4 as uuidv4 } from 'uuid';
import { User } from 'src/app/user.model';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {

  appName:string;
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
  isContactInfoExists: boolean = false;

  user: User;

  NL = `\n`; //new line

  contactForm: FormGroup;
  
  constructor(private storage: Storage, private router: Router, private cartService: CartService, private fb: FormBuilder, private appService: FireService, private loginService: LoginService) {
    this.appName = CONFIG_OBJ.appName;

    this.user = this.loginService.getUser();
    this.loginService.user$.subscribe(data => {
      this.user = data;
    });

    this.cartService.cart.subscribe((items: CartItem[]) => {
      this.items = this.cartService.getCartItems();
      this.totalPrice = this.cartService.totalPrice;
      this.totalItems = this.cartService.totalItems;
    });

    this.contactForm = this.fb.group({
      name: [null, [Validators.required]],
      // email: [null, [ Validators.required, Validators.email]],
      // phone: [null, [Validators.required]],
      address: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    // this.storage.get("contact").then(contact => {
    //   this.isContactInfoExists = true;
    //   this.contactForm.setValue(contact);
    //   this.contactForm.updateValueAndValidity();
    // });

    if(this.user && this.user!=null){
      let email = this.user.getEmail();
      if(email && email!=null){
        this.appService.getAccountInfo(email).subscribe(data => {
          this.contactForm.reset(data);
        });
      }
    }

  }

  goBack(){
    this.router.navigate([".."])
  }

  placeOrder(){
    if(this.contactForm && this.contactForm.valid){

      let contact = this.contactForm.getRawValue();
      if(!this.isContactInfoExists){
        this.storage.set("contact", contact);
      }

      let orderId: string = ""+Date.now();
      // let orderId: string = uuidv4();

      let order: Order = {
        orderId: orderId,
        orderBy: contact.name,
        phone: contact.phone?contact.phone:null,
        email: contact.email?contact.email:null,
        address: contact.address,
        orderItems: this.items,
        totalItems: this.totalItems,
        totalPrice: this.totalPrice
      }
      let textMessage = this.generateOrderMessage(order);

      this.appService.saveOrder(order).then(()=>{
        this.router.navigate(['/gratitude']);
        window.location.href = `https://api.whatsapp.com/send?phone=${CONFIG_OBJ.phone}&text=${textMessage}`;
      })
    }
  }

  save(order: Order){
    try{
      
    }catch(err){
      //do nothing yet
    }
  }

  generateOrderMessage(order: Order){
    let orderDate = new Date().toLocaleString();
    let textMessage:string[] = [
                                  `---------------------------`,
                                  `Order Id: ${order.orderId}`,
                                  `Order By: ${order.orderBy}`,
                                  `Order Date: ${orderDate}`,
                                  // `Phone   : ${order.phone}`,
                                  // `Email   : ${order.email}`,
                                  ` `,
                                  `Address : ${order.address}`,
                                  `---------------------------`,
                                  `Our customers can also pay via below Gpay or PayTM Number`,
                                  `+919867272586              `,
                                  `---------------------------`
                               ];
    order.orderItems.forEach((e:CartItem,i) => {
      textMessage.push(`${(i+1)}. ${e.item.name} (${e.item.unitVal} ${e.item.unit}) -> Qty ${e.quantity}`);
    })

    textMessage.push(" ");
    textMessage.push(" ");
    textMessage.push(`---------------------------`);
    textMessage.push(`Total items: ${order.totalItems}`);
    textMessage.push(`Order Amount: ${order.totalPrice} INR`);
    textMessage.push(`---------------------------`);
    textMessage.push(`Our customers can also pay via below Gpay or PayTM Number`);
    textMessage.push(`+919867272586`);
    textMessage.push(`---------------------------`);

    let textMessageFormatted = encodeURIComponent(textMessage.join(this.NL));
    return textMessageFormatted;
  }

}
