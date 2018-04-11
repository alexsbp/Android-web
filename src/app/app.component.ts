import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase'; //registers the Firebase module
import { HomePage } from '../pages/home/home';

//constant variable for holds Firebase setting
const config = {
  apiKey: 'AIzaSyChzaWMwZr9m43IIQtV0K5-_HGXcVRd-aA',
  authDomain: 'school-project-ee979.firebaseapp.com',
  databaseURL: 'https://school-project-ee979.firebaseio.com/',
  projectId: 'school-project-ee979',
  storageBucket: 'gs://school-project-ee979.appspot.com',
};
 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config); //Runs the firebase configuration. 
  }
}

