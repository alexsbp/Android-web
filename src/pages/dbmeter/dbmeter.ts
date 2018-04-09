import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DBMeter } from '@ionic-native/db-meter';

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad DbmeterPage');
    this.subscription = this.dbMeter.start().subscribe(
    data => console.log(data)
      
    );
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
}

