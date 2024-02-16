import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateoffertsPage } from './createofferts.page';

const routes: Routes = [
  {
    path: '',
    component: CreateoffertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateoffertsPageRoutingModule {}
