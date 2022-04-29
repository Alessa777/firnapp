import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErfolgreichPage } from './erfolgreich.page';

describe('ErfolgreichPage', () => {
  let component: ErfolgreichPage;
  let fixture: ComponentFixture<ErfolgreichPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErfolgreichPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErfolgreichPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
