import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtractivosPage } from './atractivos.page';

describe('AtractivosPage', () => {
  let component: AtractivosPage;
  let fixture: ComponentFixture<AtractivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtractivosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtractivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
