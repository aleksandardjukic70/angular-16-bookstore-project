import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

// const STORE_BASE_URL = 'https://www.fakestoreapi.com/';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  // GET METHOD

  getAllProduct(limit = '10', sort = 'desc'): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(
      `http://localhost:3000/products`
    )
  }

  /*getAllCategories(): Observable<Array>string> {
    return this.http.get<Array<string>>(
      `http://localhost:3000/products/categories`
    )
  }*/
}

