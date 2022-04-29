import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NachhilfegebenPage } from './nachhilfegeben.page';

describe('NachhilfegebenPage', () => {
  let component: NachhilfegebenPage;
  let fixture: ComponentFixture<NachhilfegebenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NachhilfegebenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NachhilfegebenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
