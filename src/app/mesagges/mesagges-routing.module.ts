import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesaggesPage } from './mesagges.page';

const routes: Routes = [
  {
    path: '',
    component: MesaggesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesaggesPageRoutingModule {}
