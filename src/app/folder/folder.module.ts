import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../app.service';
import { FireService } from '../fire.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    FolderPageRoutingModule,
    SharedModule
  ],
  declarations: [
    FolderPage, 
    HomeComponent
  ],
  providers:[
    FireService
  ]
})
export class FolderPageModule {}
