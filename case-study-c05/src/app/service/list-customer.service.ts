import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../customer';

@Injectable({
  providedIn: 'root'
})
export class ListCustomerService {
  private API_CUSTOMER_URL = 'http://localhost:3000/customerList';
  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_CUSTOMER_URL);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_CUSTOMER_URL + '/' + id);
  }

  saveUpdate(value: Customer): Observable<void> {
    return this.httpClient.patch<void>(this.API_CUSTOMER_URL + '/' + value.id, value);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_CUSTOMER_URL + '/' + id);
  }

  saveCreate(value: Customer): Observable<void> {
    return this.httpClient.post<void>(this.API_CUSTOMER_URL, value);
  }
}
