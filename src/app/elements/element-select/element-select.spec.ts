import { ElementSelectComponent } from './element-select';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('ElementSelectComponent', () => {
  let component: ElementSelectComponent;
  let fixture: ComponentFixture<ElementSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElementSelectComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
