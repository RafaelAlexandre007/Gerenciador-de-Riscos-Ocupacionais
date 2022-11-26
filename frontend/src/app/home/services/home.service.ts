import { LastView } from './../model/last-view';
import { environment } from './../../../environments/environment';
import { Aets } from './../../ergoeasy/interfaces/aets';
import { Observable, first, tap, retry, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private url = `${environment.lastViewsApiUrl}`;

  constructor(private httpClient: HttpClient) {}

  getLastViews(): Observable<LastView[]> {
    return this.httpClient.get<LastView[]>(this.url);
  }

  //
}
