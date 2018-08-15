import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Conta } from '../../models/conta';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ContaService {

  private uri: string = "http://localhost:8080/contas/";

  constructor(private http: HttpClient) { }

  list(): Observable<Conta[]> {
    return this.http.get<Conta[]>(this.uri)
      .pipe(
        catchError(this.handleError('list', []))
      );
  }

  get(id: number): Observable<any>{
    const url = `${this.uri}${id}`;

    return this.http.get<Conta>(url).pipe(
      catchError(this.handleError('get', []))
    );
  }

  update(conta: Conta): Observable<any> {
    const url = `${this.uri}${conta.id}`;
    return this.http.put(url, conta, httpOptions).pipe(
      catchError(this.handleError<any>('update'))
    )
  }

  add(conta:Conta): Observable<any> {
    return this.http.post<Conta>(this.uri, conta, httpOptions).pipe(
      catchError(this.handleError<Conta>('add'))
    );
  } 

  delete(id: number): Observable<any>{
    const url = `${this.uri}${id}`;

    return this.http.delete<any>(url, httpOptions).pipe(
      catchError(this.handleError<Conta>('delete'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
