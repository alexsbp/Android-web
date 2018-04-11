import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoomPage } from  '../room/room';
//import { RoomPage } from  '../room/room';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage 
{

  data = { nickname:"" };

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {

  }

  enterNickname()
  {
    this.navCtrl.setRoot(RoomPage, {
    nickname: this.data.nickname
  });
  }
  



  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad SignInPage');
  }



}
