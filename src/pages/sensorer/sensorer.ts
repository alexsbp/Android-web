import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbmeterPage } from '../dbmeter/dbmeter';
import { GeoFencePage } from '../geo-fence/geo-fence';
import { ShakePage } from '../shake/shake';

/**
 * Generated class for the SensorerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sensorer',
  templateUrl: 'sensorer.html',
})
export class SensorerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SensorerPage');
  }

  OpenDBMeterPage(){
    this.navCtrl.push(DbmeterPage); 
  }

  OpenGeoFencePage() {
    this.navCtrl.push(GeoFencePage);
  }

  OpenShakePage() {
    this.navCtrl.push(ShakePage);
  }

}
