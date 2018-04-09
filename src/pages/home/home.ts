import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DbmeterPage } from "../dbmeter/dbmeter";
import { ShakePage } from '../shake/shake';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  DbMeter(){
    this.navCtrl.push(DbmeterPage); 
  }
Shake(){
  this.navCtrl.push(ShakePage);
}
  //heysoren 
}
