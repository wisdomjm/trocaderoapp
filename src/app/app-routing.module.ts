import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'recover',
    loadChildren: () => import('./recover/recover.module').then( m => m.RecoverPageModule)
  },
  
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'productdetail',
    loadChildren: () => import('./productdetail/productdetail.module').then( m => m.ProductdetailPageModule)
  },
  {
    path: 'chackout',
    loadChildren: () => import('./chackout/chackout.module').then( m => m.ChackoutPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'mesagges',
    loadChildren: () => import('./mesagges/mesagges.module').then( m => m.MesaggesPageModule)
  },
  {
    path: 'deliveryaddress',
    loadChildren: () => import('./deliveryaddress/deliveryaddress.module').then( m => m.DeliveryaddressPageModule)
  },
  
  {
    path: 'chatroom',
    loadChildren: () => import('./chatroom/chatroom.module').then( m => m.ChatroomPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'adddeliveryaddress',
    loadChildren: () => import('./adddeliveryaddress/adddeliveryaddress.module').then( m => m.AdddeliveryaddressPageModule)
  },
  {
    path: 'apptabs',
    loadChildren: () => import('./apptabs/apptabs.module').then( m => m.ApptabsPageModule)
  },
  {
    path: 'addnewproduct',
    loadChildren: () => import('./addnewproduct/addnewproduct.module').then( m => m.AddnewproductPageModule)
  },
  {
    path: 'adduserinformation',
    loadChildren: () => import('./adduserinformation/adduserinformation.module').then( m => m.AdduserinformationPageModule)
  },
  {
    path: 'myproducts',
    loadChildren: () => import('./myproducts/myproducts.module').then( m => m.MyproductsPageModule)
  },
  {
    path: 'editmyproducts',
    loadChildren: () => import('./editmyproducts/editmyproducts.module').then( m => m.EditmyproductsPageModule)
  },
  {
    path: 'createofferts',
    loadChildren: () => import('./createofferts/createofferts.module').then( m => m.CreateoffertsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
