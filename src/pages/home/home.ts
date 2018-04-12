import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShakePage } from '../shake/shake';
import { SensorerPage } from '../sensorer/sensorer';
import { SignInPage } from '../sign-in/sign-in';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{
  constructor(public navCtrl: NavController) {
  }

  
Shake(){
  this.navCtrl.push(ShakePage);
}
OpenSensorPage() {
  this.navCtrl.push(SensorerPage);
}

OpenChatPage(){
  this.navCtrl.push(SignInPage); 
}


}
