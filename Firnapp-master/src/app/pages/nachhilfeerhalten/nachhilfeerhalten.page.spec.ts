import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NachhilfeerhaltenPage } from './nachhilfeerhalten.page';

describe('NachhilfeerhaltenPage', () => {
  let component: NachhilfeerhaltenPage;
  let fixture: ComponentFixture<NachhilfeerhaltenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NachhilfeerhaltenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NachhilfeerhaltenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
