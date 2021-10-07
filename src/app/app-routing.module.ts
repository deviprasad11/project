import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
 
  {path:'' ,component:HeaderComponent},
  {path:'home' ,component:HomeComponent},
  {path:'product' ,component:ProductComponent},
  {path:'contact' ,component:ContactComponent},
  {path:'about' ,component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
