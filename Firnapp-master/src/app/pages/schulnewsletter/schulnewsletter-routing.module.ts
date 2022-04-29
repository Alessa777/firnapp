import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchulnewsletterPage } from './schulnewsletter.page';

const routes: Routes = [
  {
    path: '',
    component: SchulnewsletterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchulnewsletterPageRoutingModule {}
