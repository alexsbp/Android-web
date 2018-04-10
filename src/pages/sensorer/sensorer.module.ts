import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorerPage } from './sensorer';

@NgModule({
  declarations: [
    SensorerPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorerPage),
  ],
})
export class SensorerPageModule {}
