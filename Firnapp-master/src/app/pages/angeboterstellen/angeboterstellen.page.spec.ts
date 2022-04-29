import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AngeboterstellenPage } from './angeboterstellen.page';

describe('AngeboterstellenPage', () => {
  let component: AngeboterstellenPage;
  let fixture: ComponentFixture<AngeboterstellenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngeboterstellenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AngeboterstellenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
