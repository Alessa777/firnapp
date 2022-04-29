import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErfolglosPageRoutingModule } from './erfolglos-routing.module';

import { ErfolglosPage } from './erfolglos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErfolglosPageRoutingModule
  ],
  declarations: [ErfolglosPage]
})
export class ErfolglosPageModule {}
