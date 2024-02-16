import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditmyproductsPageRoutingModule } from './editmyproducts-routing.module';

import { EditmyproductsPage } from './editmyproducts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditmyproductsPageRoutingModule
  ],
  declarations: [EditmyproductsPage]
})
export class EditmyproductsPageModule {}
