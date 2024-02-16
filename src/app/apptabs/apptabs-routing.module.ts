import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApptabsPage } from './apptabs.page';

const routes: Routes = [
  {
    path: '',
    component: ApptabsPage,
    children:[
      {
        path: 'mainstore',
        loadChildren: () => import('./../mainstore/mainstore.module').then( m => m.MainstorePageModule)
      },
      {
        path: 'mycart',
        loadChildren: () => import('./../mycart/mycart.module').then( m => m.MycartPageModule)
      },
      {
        path: 'wishlist',
        loadChildren: () => import('./../wishlist/wishlist.module').then( m => m.WishlistPageModule)
      },
      {
        path: 'editprofile',
        loadChildren: () => import('./../editprofile/editprofile.module').then( m => m.EditprofilePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApptabsPageRoutingModule {}
