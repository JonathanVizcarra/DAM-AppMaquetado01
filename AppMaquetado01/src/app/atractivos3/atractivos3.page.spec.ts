import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Atractivos3Page } from './atractivos3.page';

describe('Atractivos3Page', () => {
  let component: Atractivos3Page;
  let fixture: ComponentFixture<Atractivos3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Atractivos3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Atractivos3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
