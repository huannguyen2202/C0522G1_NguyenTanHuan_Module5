import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {PageResult} from '../model/page-result';
import {environment} from '../../environments/environment';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl: string;
  private apiUrlType: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.api_url;
    this.apiUrlType = environment.api_url_type;
  }

  findAllCustomer(name: string, page: number, size: number): Observable<PageResult<Customer>> {
    const API_URL = this.apiUrl + 'list' + '?customerName=' + name + '&page=' + (page - 1) + '&size=' + size;
    console.log(API_URL);
    return this.httpClient.get<PageResult<Customer>>(API_URL);
  }


  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.apiUrl + 'delete/' + id);
  }


  findAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.apiUrlType);
  }

  addCustomer(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.apiUrl + 'add', customer);
  }

  getById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.apiUrl + id);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.apiUrl + 'edit/' + id, customer);
  }
}
