import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

/**
 * Generated class for the ShakePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shake',
  templateUrl: 'shake.html',
})
export class ShakePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private faio: FingerprintAIO) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShakePage');
  }
dondon(){
  this.faio.show({
    clientId: 'Fingerprint-Demo',
    clientSecret: 'password', //Only necessary for Android
    disableBackup:true,  //Only for Android(optional)
    localizedFallbackTitle: 'Use Pin', //Only for iOS
    localizedReason: 'Please authenticate' //Only for iOS
  })
  .then((result: any) => console.log(result))
  .catch((error: any) => console.log(error));
}
  
}
  

