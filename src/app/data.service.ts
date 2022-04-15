import { Injectable } from '@angular/core';
import { Heroi } from './heroi';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private heroi:Heroi | undefined
constructor() { }

setHeroi(heroi:Heroi) {
  this.heroi = heroi;
}

getHeroi() {
  return this.heroi;
}

}
