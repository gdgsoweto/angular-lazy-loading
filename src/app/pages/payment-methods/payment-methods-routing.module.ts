import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentMethodsComponent } from './payment-methods.component';
import { PaypalComponent } from './paypal/paypal.component';
import { VisaComponent } from './visa/visa.component';
import { StripeComponent } from './stripe/stripe.component';

const routes: Routes = [
  { 
    path: "", 
    component: PaymentMethodsComponent,
    children: [
      { path: "", component: PaypalComponent },
      { path: "paypal", component: PaypalComponent },
      { path: "visa", component: VisaComponent },
      { path: "stripe", component: StripeComponent },
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentMethodsRoutingModule { }
