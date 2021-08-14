import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { CreateComponent } from './products/create/create.component';
import { ProductsComponent } from './products/products.component';
import { UserproductsComponent } from './userproducts/userproducts.component';
import { UserComponent } from './user/user.component';
import { UserpageComponent } from './userpage/userpage.component';

import { ProductspublicComponent } from './productspublic/productspublic.component';
import { OrdersComponent } from './orders/orders.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'aboutus' , component: AboutusComponent},
  {path:'admin' , component: AdminComponent},
  {path:'menu', component:MenuComponent},
  {path:'cart', component:CartComponent},
  {path:'user', component:UserComponent},
  {path:'footer', component:FooterComponent},
  {path:'userpage', component:UserpageComponent},
  {path:'payment', component:PaymentComponent},
  {path:'order', component:OrderComponent},
  {path:'orders', component:OrdersComponent},
  {path:'userprods', component:UserproductsComponent},
  {path:'prodspublic', component:ProductspublicComponent},
  {path:'products', children:[
  { path:'', component:ProductsComponent },
  { path:'create', component:CreateComponent }]}];

@NgModule({
  imports: [FormsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
