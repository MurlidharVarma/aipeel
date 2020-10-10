import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './shared/components/item-detail/item-detail.component';
import { CategoryItemDetailComponent } from './shared/components/category-item-detail/category-item-detail.component';

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
