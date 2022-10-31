import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }
  findAllBookSearch(nameSearch: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API_URL +
      'books?bookCode_like=' + nameSearch);
  }

  findBookSearchPaging(numberRecord: number, curPage: number,
                       nameSearch: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API_URL + 'books?_page=' + curPage + '&_limit=' + numberRecord +
      '&bookCode_like=' + nameSearch);
  }

  deleteBook(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(this.API_URL + 'books/' + id);
  }

  findAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + 'customers');
  }

  addBook(book): Observable<Book> {
    return this.httpClient.post<Book>(this.API_URL + 'books', book);
  }

  getById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(this.API_URL + 'books/' + id);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.httpClient.put<Book>(this.API_URL + 'books/' + id, book);
  }
}
