import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_CATEGORY = 'http://localhost:3000/categoryList';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API_CATEGORY);
  }
}
