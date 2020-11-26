import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProductComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./all-products/all-products.module').then((m) => m.AllProductsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
