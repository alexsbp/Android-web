import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DbmeterPage } from "../pages/dbmeter/dbmeter";
import { GeoFencePage } from "../pages/geo-fence/geo-fence";
import { ShakePage } from '../pages/shake/shake';
import { SensorerPage } from '../pages/sensorer/sensorer';
import { Geofence } from '@ionic-native/geofence';
import { DBMeter } from '@ionic-native/db-meter';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DbmeterPage,
    GeoFencePage,
    SensorerPage,
    ShakePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DbmeterPage,
    GeoFencePage,
    SensorerPage,
    ShakePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geofence,
    DBMeter,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
