import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsComponent } from './elements.component';
import { TranslateModule, NavigationModule } from '@inclouded/ionic4-inclouded-lib';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { IonicStorageModule } from '@ionic/storage';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { IncElement, Root_E } from '../shared/model/element.model';

fdescribe('ElementsComponent', () => {
  let component: ElementsComponent;
  let fixture: ComponentFixture<ElementsComponent>;

  const incElementsTest: IncElement[] = [{
    name: 'name',
    isVisible: true,
    description: 'description',
    overview: [{ title: 'title', text: 'text' }],
    modules: [{
      name: 'name', importFrom: 'importFrom', components: [{
        name: 'name', selector: 'lib-selector', properties: [{
          name: 'name', description: 'description'
        }], example: {
          html: 'html',
          ts: 'ts',
          css: 'css'
        }
      }]
    }]
  }, {
    name: 'name2',
    isVisible: false,
    description: 'description2',
    overview: [{ title: 'title2', text: 'text2' }],
    modules: [{
      name: 'name2', importFrom: 'importFrom2', components: [{
        name: 'name2', selector: 'lib-selector2', properties: [{
          name: 'name2', description: 'description2'
        }], example: {
          html: 'html2',
          ts: 'ts2',
          css: 'css2'
        }
      }]
    }]
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule, NavigationModule, AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, AngularFireAuthModule, IonicStorageModule.forRoot(),
        AngularFireDatabaseModule, RouterModule.forRoot([])],
      declarations: [ElementsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit to be correct', () => {
    const onInitSpy = spyOn(component, 'getIncElements');

    component.ngOnInit();
    expect(onInitSpy).toHaveBeenCalledTimes(1);
  });

  it('should getIncElements to be correct', async () => {
    const getSpy = spyOn((component as any).elementService, 'get').and.returnValue(of({
      payload: { val: () => incElementsTest
    }}));

    component.getIncElements();

    await fixture.whenStable();
    expect(getSpy).toHaveBeenCalledWith(Root_E.incElements);
    expect(component.incElements).toEqual([incElementsTest[0]]);
  });
});
