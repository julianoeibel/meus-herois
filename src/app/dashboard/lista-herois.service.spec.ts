/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListaHeroisService } from './lista-herois.service';

describe('Service: ListaHerois', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaHeroisService]
    });
  });

  it('should ...', inject([ListaHeroisService], (service: ListaHeroisService) => {
    expect(service).toBeTruthy();
  }));
});
