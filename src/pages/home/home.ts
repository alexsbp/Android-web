import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DbPage } from "../db/db";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Button: any; 
  constructor(public navCtrl: NavController) {
  }

  DbMeter(){
    this.navCtrl.push(DbPage); 
  }

}
