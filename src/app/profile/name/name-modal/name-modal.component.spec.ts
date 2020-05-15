import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameModalComponent } from './name-modal.component';

describe('NameModalComponent', () => {
  let component: NameModalComponent;
  let fixture: ComponentFixture<NameModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
