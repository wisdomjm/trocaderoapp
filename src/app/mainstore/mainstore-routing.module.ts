import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainstorePage } from './mainstore.page';

const routes: Routes = [
  {
    path: '',
    component: MainstorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainstorePageRoutingModule {}
