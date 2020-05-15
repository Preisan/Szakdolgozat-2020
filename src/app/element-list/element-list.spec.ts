import { ElementListComponent } from './element-list';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('ElementListComponent', () => {
  let component: ElementListComponent;
  let fixture: ComponentFixture<ElementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElementListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
