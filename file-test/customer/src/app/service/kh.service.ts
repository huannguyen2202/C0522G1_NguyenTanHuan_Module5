import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Kh} from '../model/kh';
import {KhType} from '../model/kh-type';

@Injectable({
  providedIn: 'root'
})
export class KhService {
  private API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }
  findAllKhSearch(nameSearch: string, addressSearch: string, phoneSearch: string): Observable<Kh[]> {
    return this.httpClient.get<Kh[]>(this.API_URL +
      'khs?khName_like=' + nameSearch + '&khAddress_like=' + addressSearch + '&khPhone_like=' + phoneSearch);
  }

  findKhSearchPaging(numberRecord: number, curPage: number,
                     nameSearch: string, addressSearch: string, phoneSearch: string): Observable<Kh[]> {
    return this.httpClient.get<Kh[]>(this.API_URL + 'khs?_page=' + curPage + '&_limit=' + numberRecord +
      '&khName_like=' + nameSearch + '&khAddress_like=' + addressSearch + '&khPhone_like=' + phoneSearch);
  }

  deleteKh(id: number): Observable<Kh> {
    return this.httpClient.delete<Kh>(this.API_URL + 'khs/' + id);
  }

  findAllKhType(): Observable<KhType[]> {
    return this.httpClient.get<KhType[]>(this.API_URL + 'khTypes');
  }

  addKh(kh): Observable<Kh> {
    return this.httpClient.post<Kh>(this.API_URL + 'khs', kh);
  }

  getById(id: number): Observable<Kh> {
    return this.httpClient.get<Kh>(this.API_URL + 'khs/' + id);
  }

  updateKh(id: number, kh: Kh): Observable<Kh> {
    return this.httpClient.put<Kh>(this.API_URL + 'khs/' + id, kh);
  }
}
