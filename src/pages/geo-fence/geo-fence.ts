import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geofence } from '@ionic-native/geofence';

/**
 * Generated class for the GeoFencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geo-fence',
  templateUrl: 'geo-fence.html',
})
export class GeoFencePage {

  notification: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private geofence: Geofence) 
  {
    // initialize the plugin
    geofence.initialize().then(
    // resolved promise does not return a value
    () => console.log('Geofence Plugin Ready'),
    (err) => console.log(err)
    )
    
    this.addGeofence(); 
  }
  

  public addGeofence() 
  {
    
    //options describing geofence
    let fence = 
    {
      id: 'DaniaGames', //any unique ID
      latitude:       56.410445, //center of geofence radius
      longitude:      10.886268,
      radius:         3, //radius to edge of geofence in meters
      transitionType: 3, //see 'Transition Types' below
      notification: 
      { //notification settings
          id:             1, //any unique ID
          title:          'You crossed a fence', //notification title
          text:           'You just arrived to Gliwice city center.', //notification body
          openAppOnClick: true //open app when notification is tapped
      }
    }
    this.geofence.addOrUpdate(fence).then(
      () => console.log('Geofence added'),
      (err) => console.log('Geofence failed to add')
    );
    
  }

}
