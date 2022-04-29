import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import {SchulnewsletterPage } from './schulnewsletter.page';

describe('SchulnewsletterPage', () => {
  let component: SchulnewsletterPage;
  let fixture: ComponentFixture<SchulnewsletterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchulnewsletterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchulnewsletterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
