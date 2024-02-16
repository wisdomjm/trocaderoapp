import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateoffertsPageRoutingModule } from './createofferts-routing.module';

import { CreateoffertsPage } from './createofferts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateoffertsPageRoutingModule
  ],
  declarations: [CreateoffertsPage]
})
export class CreateoffertsPageModule {}
