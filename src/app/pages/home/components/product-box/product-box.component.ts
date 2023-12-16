import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from 'src/app/models/product.model';


@Component({ // UVOZIMO app-product-box U home KOMPONENTU
  selector: 'app-product-box',
  templateUrl: './product-box.component.html' 
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false; // FUNKCIJA ZA AUTOMATSKO SKALIRANJE
  @Input() product: Product | undefined;
  @Output() addToCart = new EventEmitter();
  constructor() {}

  ngOnInit(): void {

  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
