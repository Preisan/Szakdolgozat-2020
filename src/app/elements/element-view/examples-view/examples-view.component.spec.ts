import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesViewComponent } from './examples-view.component';

describe('ExamplesViewComponent', () => {
  let component: ExamplesViewComponent;
  let fixture: ComponentFixture<ExamplesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExamplesViewComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
