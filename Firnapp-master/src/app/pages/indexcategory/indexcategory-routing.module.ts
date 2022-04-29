import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexcategoryPage } from './indexcategory.page';

const routes: Routes = [
  {
    path: '',
    component: IndexcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexcategoryPageRoutingModule {}
