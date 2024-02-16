import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApptabsPageRoutingModule } from './apptabs-routing.module';

import { ApptabsPage } from './apptabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApptabsPageRoutingModule
  ],
  declarations: [ApptabsPage]
})
export class ApptabsPageModule {}
