import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderingComponent } from './ordering/ordering.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactsComponent } from './contacts/contacts.component';
import { OrderFrontComponent } from './order-front/order-front.component';
import { OrderCustomComponent } from './order-custom/order-custom.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'order', component: OrderingComponent, children: [
    { path: '', component: OrderFrontComponent },
    { path: 'custom', component: OrderCustomComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'payment', component: PaymentComponent }
  ]},
  { path: 'locations', component: LocationsComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
