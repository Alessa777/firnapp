import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NachhilfegebenPage } from './nachhilfegeben.page';

const routes: Routes = [
  {
    path: '',
    component: NachhilfegebenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NachhilfegebenPageRoutingModule {}
