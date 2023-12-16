import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './api/cart.service';

//OVDE SMEŠTAMO/UVOZIMONG KOMPONENTE
@Component({
  selector: 'app-root', //  v\--- app-header SELEKTOR IZ header.component.ts (header KOMPONENTE), router-outlet - ZA home KOMPONENTU
  template: `
   <app-header [cart]="cart"></app-header>
   <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  cart: Cart = { items: [] };

constructor(private cartService: CartService) {}

ngOnInit(): void {
  this.cartService.cart.subscribe((_cart) => {
    this.cart = _cart;
  });
}

}
