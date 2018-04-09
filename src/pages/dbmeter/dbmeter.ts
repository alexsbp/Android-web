import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeoFencePage } from '../geo-fence/geo-fence';

/**
 * Generated class for the DbmeterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dbmeter',
  templateUrl: 'dbmeter.html',
})
export class DbmeterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  OpenGeoFencePage() {
    this.navCtrl.push(GeoFencePage);
  }
  OpenDBMeterPage() {
    this.navCtrl.push(DbmeterPage);
  }
  OpenFingerPrintPage() {
    //this.navCtrl.push();
  }



}
