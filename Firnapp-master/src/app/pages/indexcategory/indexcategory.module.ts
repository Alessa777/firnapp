import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexcategoryPageRoutingModule } from './indexcategory-routing.module';

import { IndexcategoryPage } from './indexcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexcategoryPageRoutingModule
  ],
  declarations: [IndexcategoryPage]
})
export class IndexcategoryPageModule {}
