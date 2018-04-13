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

//chat pages
import { SignInPage } from '../pages/sign-in/sign-in';
import { RoomPage } from '../pages/room/room';
import { AddRoomPage } from '../pages/add-room/add-room';
import { HomeChatPage } from '../pages/home-chat/home-chat';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DbmeterPage,
    GeoFencePage,
    SensorerPage,
    ShakePage,
    SignInPage,
    RoomPage,
    AddRoomPage,
    HomeChatPage
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
    ShakePage,
    SignInPage,
    RoomPage,
    AddRoomPage,
    HomeChatPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FingerprintAIO,
    Geofence,
    DBMeter,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
