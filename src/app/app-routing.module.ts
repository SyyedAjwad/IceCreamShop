import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path : '', redirectTo : '/landing-home', pathMatch: 'full'},
  {path: 'landing-home', component: LandingHomeComponent},
  {path: 'order-details', component: OrderDetailsComponent },
  {path : 'shopping-cart', component : CartComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'header', component: HeaderComponent},
  { path : '**', redirectTo : '/landing-home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LandingHomeComponent,OrderDetailsComponent,FooterComponent,HeaderComponent]