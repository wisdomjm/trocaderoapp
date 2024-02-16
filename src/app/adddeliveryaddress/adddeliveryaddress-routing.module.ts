import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdddeliveryaddressPage } from './adddeliveryaddress.page';

const routes: Routes = [
  {
    path: '',
    component: AdddeliveryaddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdddeliveryaddressPageRoutingModule {}
