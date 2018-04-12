import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddRoomPage } from '../add-room/add-room';
import { HomeChatPage } from '../home-chat/home-chat';
import * as firebase from 'Firebase';

/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage 
{
  //holds room list and referencing Firebase database.
  rooms = [];
  ref = firebase.database().ref('chatrooms/');

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
    //Firebase function to listening any value changes from Firebase Database.
    this.ref.on('value', resp => 
    {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);
    });
  }

  //navigating to `add-room` page.
  addRoom() 
  {
    this.navCtrl.push(AddRoomPage);
  }

  //join or navigating to Home Page of selected Room.
  joinRoom(key) 
  {
    this.navCtrl.setRoot(HomeChatPage, {key:key, nickname:this.navParams.get("nickname")});
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad RoomPage');

  }
}

//converting Firebase response to an array.
export const snapshotToArray = snapshot => 
{
  let returnArr = [];

  snapshot.forEach(childSnapshot => 
  {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};
