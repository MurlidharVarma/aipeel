import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageItemsComponent } from './components/manage-items/manage-items.component';

const routes: Routes = [
  {
    path: "manage", component: ManageItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CfgRoutingModule { }
