import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesaggesPageRoutingModule } from './mesagges-routing.module';

import { MesaggesPage } from './mesagges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesaggesPageRoutingModule
  ],
  declarations: [MesaggesPage]
})
export class MesaggesPageModule {}
