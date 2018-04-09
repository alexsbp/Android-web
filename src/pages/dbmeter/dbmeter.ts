import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { GeoFencePage } from '../geo-fence/geo-fence';
=======
import { DBMeter } from '@ionic-native/db-meter';
>>>>>>> 3b73abef97351297afa9becc88779f4726670a35

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

  private subscription:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dbMeter: DBMeter) {
  }

<<<<<<< HEAD
  OpenGeoFencePage() {
    this.navCtrl.push(GeoFencePage);
=======
  ionViewDidLoad() {
    console.log('ionViewDidLoad DbmeterPage');
    this.subscription = this.dbMeter.start().subscribe(
      data => console.log(data)
    );
>>>>>>> 3b73abef97351297afa9becc88779f4726670a35
  }
  OpenDBMeterPage() {
    this.navCtrl.push(DbmeterPage);
  }
  OpenFingerPrintPage() {
    //this.navCtrl.push();
  }



  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
}

