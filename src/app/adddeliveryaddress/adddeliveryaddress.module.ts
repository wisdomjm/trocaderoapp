import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdddeliveryaddressPageRoutingModule } from './adddeliveryaddress-routing.module';

import { AdddeliveryaddressPage } from './adddeliveryaddress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdddeliveryaddressPageRoutingModule
  ],
  declarations: [AdddeliveryaddressPage]
})
export class AdddeliveryaddressPageModule {}
