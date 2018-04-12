import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content, IonicPage } from 'ionic-angular';
import { RoomPage } from '../room/room';
import * as firebase from 'Firebase';

/**
 * Generated class for the HomeChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-chat',
  templateUrl: 'home-chat.html',
})
export class HomeChatPage 
{

  
  //Declare content module
  @ViewChild(Content) content: Content;

  //variables for hold data object, chats array, room key, nickname and status for sign out.
  data = { type:'', nickname:'', message:'' };
  chats = [];
  roomkey:string;
  nickname:string;
  offStatus:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
    this.roomkey = this.navParams.get("key") as string;
    this.nickname = this.navParams.get("nickname") as string;
    this.data.type = 'message';
    this.data.nickname = this.nickname;

    let joinData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
    joinData.set({
    type:'join',
    user:this.nickname,
    message:this.nickname+' has joined this room.',
    sendDate:Date()
    });
    this.data.message = '';

  firebase.database().ref('chatrooms/'+this.roomkey+'/chats').on('value', resp => 
    {
      this.chats = [];
      this.chats = snapshotToArray(resp);
      setTimeout(() => {
        if(this.offStatus === false) {
          this.content.scrollToBottom(300);
        }
      }, 1000);
    });
  }

  //a function for sending a message that actually saves message data to Firebase database as room child.
  sendMessage() 
  {
    let newData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
    newData.set({
      type:this.data.type,
      user:this.data.nickname,
      message:this.data.message,
      sendDate:Date()
    });
    this.data.message = '';
  }

  // function for exit or sign out from the current chat room. This also sends the message for exit status to Firebase database.
  exitChat() 
  {
    let exitData = firebase.database().ref('chatrooms/'+this.roomkey+'/chats').push();
    exitData.set({
      type:'exit',
      user:this.nickname,
      message:this.nickname+' has exited this room.',
      sendDate:Date()
    });
  
    this.offStatus = true;
  
    this.navCtrl.setRoot(RoomPage, {
      nickname:this.nickname
    });
  }

  



  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad HomeChatPage');
  }

}

//converting Firebase response to an array.
export const snapshotToArray = snapshot => 
{
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};
