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

  subscription:any;
  currentAmplitude: any;  
  constructor(public navCtrl: NavController, public navParams: NavParams, private dbMeter: DBMeter) 
  {

    let subscription = this.dbMeter.start().subscribe
    (
      data => this.currentAmplitude = data
    );

    // Check if we are listening
    this.dbMeter.isListening().then
    (
      isListening => console.log(isListening)
    );

    

    //subscription.unsubscribe(); 
  }

  DeleteDBMeter()
  {
     // Delete DBMeter instance from memory
     this.dbMeter.delete().then
     (
       () => console.log('Deleted DB Meter instance'),
       error => console.log('Error occurred while deleting DB Meter instance')
     );

  }

}


