import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Item } from '../../../shared/models/item.model';
import { CfgService } from '../../cfg.service';
import * as _ from 'underscore';
import { FireService } from 'src/app/fire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.component.html',
  styleUrls: ['./manage-items.component.scss'],
})
export class ManageItemsComponent implements OnInit, OnDestroy {

  items: Item[];
  originalItems: Item[];

  searchTxt: FormControl;

  constructor(private cfgService: CfgService, private appService: FireService, private router: Router) {
    this.cfgService.getAllItems().subscribe(data => this.setItems(data));

    this.searchTxt = new FormControl(null);
    this.searchTxt.valueChanges.subscribe(txt=>{
      if(txt && txt!=null && txt.trim().length>0){
        if (this.originalItems && this.originalItems!=null && this.originalItems.length>0){
          this.items = _.filter(this.originalItems, e => e.name.toLowerCase().indexOf(txt.toLowerCase()) != -1);
        }
      }else{
        this.items = this.originalItems;
      }
    })
  }

  ngOnInit() {}

  ngOnDestroy(){
    console.log("Clearing")
    // this.appService.initialize();
  }

  setItems(items: Item[]){
    this.items = _.sortBy(items,'id');
    this.originalItems = [...items];
  }

  goBack(){
    this.router.navigate([".."])
  }

}
