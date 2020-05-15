import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiViewComponent } from './api-view.component';

describe('ApiViewComponent', () => {
  let component: ApiViewComponent;
  let fixture: ComponentFixture<ApiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApiViewComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
