import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeoFencePage } from './geo-fence';

@NgModule({
  declarations: [
    GeoFencePage,
  ],
  imports: [
    IonicPageModule.forChild(GeoFencePage),
  ],
})
export class GeoFencePageModule {}
