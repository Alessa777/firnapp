import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchulnewsletterPageRoutingModule } from './schulnewsletter-routing.module';

import { SchulnewsletterPage } from './schulnewsletter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchulnewsletterPageRoutingModule
  ],
  declarations: [SchulnewsletterPage]
})
export class SchulnewsletterPageModule {}
