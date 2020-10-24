import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CfgRoutingModule } from './cfg-routing.module';
import { ItemComponent } from './components/item/item.component';
import { ManageItemsComponent } from './components/manage-items/manage-items.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemComponent,
    ManageItemsComponent
  ],
  imports: [
    CommonModule,
    CfgRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    IonicModule
  ]
})
export class CfgModule { }
