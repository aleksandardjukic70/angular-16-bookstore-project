import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [{ 
  path: 'home',
  component: HomeComponent
},
{
  path: 'cart',
  component: CartComponent
},
{
  path: '', redirectTo: 'home', pathMatch: 'full'
} // POSTAVLJAMO DA JE OVA KOMPONENTA DEFAULT LOKACIJA APLIKACIJE (NPR. localhost:4200 U PRETRAŽIVAČU ĆE PRIKAZATI STRANICU KOJU SMO DEFINISALI OVDE)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
