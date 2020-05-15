import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementViewComponent } from './element-view.component';

describe('ElementViewComponent', () => {
  let component: ElementViewComponent;
  let fixture: ComponentFixture<ElementViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElementViewComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
