import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DbPage } from './db';

@NgModule({
  declarations: [
    DbPage,
  ],
  imports: [
    IonicPageModule.forChild(DbPage),
  ],
})
export class DbPageModule {}
