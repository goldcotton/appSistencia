import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  apiUrl = 'https://jsonplaceholder.typicode.com'; // definimos la url de la api de jsonplaceholder

  constructor(private http:HttpClient) { }

  getPosts():Observable<any>{ // creamos un método que nos devuelva los posts de la api de jsonplaceholder
    return this.http.get(this.apiUrl+'/posts/').pipe(
      retry(3)
    );
  }
}
