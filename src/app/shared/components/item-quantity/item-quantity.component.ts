import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: ['./item-quantity.component.scss'],
})
export class ItemQuantityComponent implements OnInit {

  @Input("qty")
  qty: number;

  @Input("initialQty")
  initialQty: number = 0;

  @Input("increment")
  increment: number = 1;

  @Output("updateQty")
  updateQty: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.qty = 0.0;
    this.initialQty=0;
    this.increment=1;
  }

  ngOnInit() {
    this.qty = this.initialQty?this.initialQty:0;
    this.increment = this.increment?this.increment:1;
  }

  add(){
    this.qty = this.qty + this.increment;
    this.updateQty.emit(this.qty)
  }

  remove(){
    let diff = this.qty - this.increment;;
    if(diff >= 0){
      this.qty = diff;
      this.updateQty.emit(this.qty);
    }
  }

}
