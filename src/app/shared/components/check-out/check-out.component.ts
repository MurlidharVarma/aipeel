import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { CONFIG_OBJ } from 'src/app/config';
import { CartItem } from '../../models/cart-item';
import { Order } from '../../models/order';

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

  NL = `\n`; //new line

  contactForm: FormGroup;
  
  constructor(private route: ActivatedRoute, private router: Router, private cartService: CartService, private fb: FormBuilder) {
    this.appName = CONFIG_OBJ.appName;
    this.cartService.cart.subscribe((items: CartItem[]) => {
      this.items = this.cartService.getCartItems();
      this.totalPrice = this.cartService.totalPrice;
      this.totalItems = this.cartService.totalItems;
    })
  }

  ngOnInit() {

    this.contactForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [ Validators.required, Validators.email]],
      phone: [null, [Validators.required]],
      address: [null, [Validators.required]]
    })
  }

  goBack(){
    this.router.navigate([".."])
  }

  placeOrder(){
    if(this.contactForm && this.contactForm.valid){
      let orderId: string = ""+new Date().getTime();
      let contact = this.contactForm.getRawValue();

      let order: Order = {
        orderId: orderId,
        orderBy: contact.name,
        phone: contact.phone,
        email: contact.email,
        address: contact.address,
        orderItems: this.items,
        totalItems: this.totalItems,
        totalPrice: this.totalPrice
      }
      let textMessage = this.generateOrderMessage(order);
      window.location.href = `https://api.whatsapp.com/send?phone=${CONFIG_OBJ.phone}&text=${textMessage}`;
    }
    // https://api.whatsapp.com/send?phone=whatsappphonenumber&text=urlencodedtext
  }

  generateOrderMessage(order: Order){
    let textMessage:string[] = [
                                  `---------------------------`,
                                  `Order Id: ${order.orderId}`,
                                  `Order By: ${order.orderBy}`,
                                  `Phone   : ${order.phone}`,
                                  `Email   : ${order.email}`,
                                  ` `,
                                  `Address : ${order.address}`,
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

    let textMessageFormatted = encodeURIComponent(textMessage.join(this.NL));
    return textMessageFormatted;
  }

}
