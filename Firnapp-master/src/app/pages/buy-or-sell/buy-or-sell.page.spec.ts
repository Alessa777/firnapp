import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyOrSellPage } from './buy-or-sell.page';

describe('BuyOrSellPage', () => {
  let component: BuyOrSellPage;
  let fixture: ComponentFixture<BuyOrSellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyOrSellPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyOrSellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
