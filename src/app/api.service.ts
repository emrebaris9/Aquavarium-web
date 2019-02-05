import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Fish } from './fish';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = "/api/v1/fishes";

@Injectable({
  providedIn: 'root',

})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<err>(operation = 'operation', result?: err) { // 
    return (error: any): Observable<err> => {
      console.error(error);
      return of(result as err); // uygulama boş değer döndürerek devam eder
    };
  }
  getFishes(): Observable<Fish[]> {
    return this.http.get<Fish[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched fishes')),
        catchError(this.handleError('getFishes', []))
      );
  }
  getFish(id: number): Observable<Fish> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Fish>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<Fish>(`getProduct id=${id}`))
    );
  }
  addFish(fish): Observable<Fish> {
    return this.http.post<Fish>(apiUrl, fish, httpOptions)
      .pipe(tap((fishes: Fish) => console.log(`Added Fish id=${fish.id}`)),
        catchError(this.handleError<Fish>('addFish'))
      )
  }
  updateFish(id, fish): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, fish, httpOptions)
      .pipe(tap(_ => console.log(`updated.fish id = ${id}`)),
        catchError(this.handleError<any>('updateFish'))
      )
  }
  deleteFish(id): Observable<Fish> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Fish>(url, httpOptions)
      .pipe(tap(_ => console.log(`deleted fish id=${id}`)),
        catchError(this.handleError<Fish>('deleteFish'))
      )
  }

}
