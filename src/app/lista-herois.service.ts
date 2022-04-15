import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Heroi } from './heroi'; 
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaHeroisService {

  getHeroi() {
  throw new Error('Method not implemented.');
}

private readonly API = 'https://superheroapi.com/api/5033128890082701/search/m'

constructor(private http: HttpClient) { }

list() {
  
  return this.http.get<Heroi[]>(this.API)
  .pipe(
    tap(console.log)
  )
}


}