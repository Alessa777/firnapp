import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndexcategoryPage } from './indexcategory.page';

describe('IndexcategoryPage', () => {
  let component: IndexcategoryPage;
  let fixture: ComponentFixture<IndexcategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexcategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexcategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
