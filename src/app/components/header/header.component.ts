//ng g c header
import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-header', //OVAJ SELEKTOR KOPIRAMO U app.component.ts "template:"
  templateUrl:'./header.component.html',  //SA templateUrl-om TARGETUJEMO header.component.html KOJI SMO NAPRAVILI U header KOMPONENTI
})
export class HeaderComponent {
  private _cart: Cart = {items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }
  
  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  constructor(private cartService: CartService) {

  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart() {
    this.cartService.clearCart();
  }

}
