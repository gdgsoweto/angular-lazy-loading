import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentMethodsRoutingModule } from './payment-methods-routing.module';
import { PaymentMethodsComponent } from './payment-methods.component';
import { PaypalComponent } from './paypal/paypal.component';
import { VisaComponent } from './visa/visa.component';
import { StripeComponent } from './stripe/stripe.component';

@NgModule({
  declarations: [PaymentMethodsComponent, PaypalComponent, VisaComponent, StripeComponent],
  imports: [
    CommonModule,
    PaymentMethodsRoutingModule
  ]
})
export class PaymentMethodsModule { }
