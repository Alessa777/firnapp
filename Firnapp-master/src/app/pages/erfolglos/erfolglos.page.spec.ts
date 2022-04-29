import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErfolglosPage } from './erfolglos.page';

describe('ErfolglosPage', () => {
  let component: ErfolglosPage;
  let fixture: ComponentFixture<ErfolglosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErfolglosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErfolglosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
