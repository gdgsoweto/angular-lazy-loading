import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FashionAndLifestyleComponent } from './fashion-and-lifestyle/fashion-and-lifestyle.component';
import { GlobalCollectionComponent } from './global-collection/global-collection.component';

@NgModule({
  declarations: [HomeComponent, FashionAndLifestyleComponent, GlobalCollectionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
