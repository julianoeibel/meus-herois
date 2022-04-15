/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InformHeroisComponent } from './inform-herois.component';

describe('InformHeroisComponent', () => {
  let component: InformHeroisComponent;
  let fixture: ComponentFixture<InformHeroisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformHeroisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformHeroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
