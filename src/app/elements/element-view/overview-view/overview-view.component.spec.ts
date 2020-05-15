import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewViewComponent } from './overview-view.component';

describe('OverviewViewComponent', () => {
  let component: OverviewViewComponent;
  let fixture: ComponentFixture<OverviewViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewViewComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
