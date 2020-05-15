import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApiEditComponent } from './api-edit.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ApiEditComponent', () => {
  let component: ApiEditComponent;
  let fixture: ComponentFixture<ApiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiEditComponent ],
      imports: [IonicModule.forRoot()],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
