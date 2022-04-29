import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NachhilfeerhaltenPageRoutingModule } from './nachhilfeerhalten-routing.module';

import { NachhilfeerhaltenPage } from './nachhilfeerhalten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NachhilfeerhaltenPageRoutingModule
  ],
  declarations: [NachhilfeerhaltenPage]
})
export class NachhilfeerhaltenPageModule {}
