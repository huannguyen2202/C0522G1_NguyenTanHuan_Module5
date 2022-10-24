import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private API_URL = 'http://localhost:3000/productList';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL);
  }

  findById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL + '/' + productId);
  }

  saveUpdate(productObj: Product): Observable<Product> {
    return this.httpClient.patch<Product>(this.API_URL + '/' + productObj.id, productObj);
  }

  saveCreate(productObj: Product): Observable<Product> {
    return this.httpClient.post(this.API_URL, productObj);
  }

  deleteProduct(productId: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.API_URL + '/' + productId);
  }
}
