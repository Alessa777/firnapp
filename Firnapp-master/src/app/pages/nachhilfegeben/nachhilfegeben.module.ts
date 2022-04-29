import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NachhilfegebenPageRoutingModule } from './nachhilfegeben-routing.module';

import { NachhilfegebenPage } from './nachhilfegeben.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NachhilfegebenPageRoutingModule
  ],
  declarations: [NachhilfegebenPage]
})
export class NachhilfegebenPageModule {}
