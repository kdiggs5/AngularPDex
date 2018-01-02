import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ApiService {

  private baseApiUrl = '/pokeapi';
  protected url: string;
  constructor(protected endPoint:string, protected http: HttpClient) {
    this.url = `${this.baseApiUrl}/${this.endPoint}`;
   }

   private catch() : any {
    (err: HttpErrorResponse) => {

      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
      }

      return Observable.throw(err.message || err);
    }
   }

   getAll<T>(): Observable<{} | T[]> {
    return this.http.get<T[]>(this.url)
      .catch(this.catch());
   }

   getById<T>(id:number): Observable<{} | T>{
     let urlwId = `${this.url}/${id}`; 
     return this.http.get<T>(urlwId)
      .catch(this.catch());
   }

}
