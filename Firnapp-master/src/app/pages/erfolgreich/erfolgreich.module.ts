import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErfolgreichPageRoutingModule } from './erfolgreich-routing.module';

import { ErfolgreichPage } from './erfolgreich.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErfolgreichPageRoutingModule
  ],
  declarations: [ErfolgreichPage]
})
export class ErfolgreichPageModule {}
