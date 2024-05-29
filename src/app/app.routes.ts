import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { BodyComponent } from "./body/body.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'body', component: BodyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'product/:title', component: ProductDetailsComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
