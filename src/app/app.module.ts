import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DbmeterPage } from "../pages/dbmeter/dbmeter";
<<<<<<< HEAD
import { GeoFencePage } from "../pages/geo-fence/geo-fence";
=======
import { ShakePage } from "../pages/shake/shake";
>>>>>>> 3b73abef97351297afa9becc88779f4726670a35

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DbmeterPage,
<<<<<<< HEAD
    GeoFencePage
=======
    ShakePage
>>>>>>> 3b73abef97351297afa9becc88779f4726670a35
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
<<<<<<< HEAD
    GeoFencePage
=======
    ShakePage
>>>>>>> 3b73abef97351297afa9becc88779f4726670a35
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
