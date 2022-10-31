import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }
  findAllProductSearch(nameSearch: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL +
      'products?productName_like=' + nameSearch);
  }

  findProductSearchPaging(numberRecord: number, curPage: number,
                          nameSearch: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL + 'products?_page=' + curPage + '&_limit=' + numberRecord +
      '&productName_like=' + nameSearch);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.API_URL + 'products/' + id);
  }

  findAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API_URL + 'categories');
  }

  addProduct(product): Observable<Product> {
    return this.httpClient.post<Product>(this.API_URL + 'products', product);
  }

  getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + 'products/' + id);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.API_URL + 'products/' + id, product);
  }
}
