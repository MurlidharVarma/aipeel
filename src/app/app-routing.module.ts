import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './shared/components/item-detail/item-detail.component';
import { CategoryItemDetailComponent } from './shared/components/category-item-detail/category-item-detail.component';
import { CheckOutComponent } from './shared/components/check-out/check-out.component';
import { MyAccountComponent } from './shared/components/my-account/my-account.component';
import { ContactComponent } from './shared/components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/home',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'itemDetails/:id',
    component: ItemDetailComponent
  },
  {
    path: 'categoryItemDetail/:categoryId',
    component: CategoryItemDetailComponent
  },
  {
    path: 'checkout',
    component: CheckOutComponent
  },
  {
    path: 'myaccount',
    component: MyAccountComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
