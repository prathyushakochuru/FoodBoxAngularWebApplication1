
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { UserproductsComponent } from './userproducts/userproducts.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
//import { ProductsadminComponent } from './productspublic/productsadmin.component';
import { UserComponent } from './user/user.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ProductspublicComponent } from './productspublic/productspublic.component';
//import { CreateModule } from './products/create/create.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    OrdersComponent,
    AboutusComponent,
    MenuComponent,
    AdminComponent,
    UserproductsComponent,
    CartComponent,
    OrderComponent,
    PaymentComponent,
    ProductspublicComponent,
    UserComponent,
    UserpageComponent
  ],
  imports: [
    
    AppRoutingModule,HttpClientModule, FormsModule, CommonModule, BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
