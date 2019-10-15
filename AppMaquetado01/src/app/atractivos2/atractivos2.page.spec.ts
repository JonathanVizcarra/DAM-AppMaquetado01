import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Atractivos2Page } from './atractivos2.page';

describe('Atractivos2Page', () => {
  let component: Atractivos2Page;
  let fixture: ComponentFixture<Atractivos2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Atractivos2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Atractivos2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
