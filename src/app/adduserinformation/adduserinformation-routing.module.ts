import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdduserinformationPage } from './adduserinformation.page';

const routes: Routes = [
  {
    path: '',
    component: AdduserinformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdduserinformationPageRoutingModule {}
