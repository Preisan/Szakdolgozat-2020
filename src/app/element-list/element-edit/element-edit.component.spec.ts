import { ElementEditComponent } from './element-edit.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('ElementEditComponent', () => {
  let component: ElementEditComponent;
  let fixture: ComponentFixture<ElementEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElementEditComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
