import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DbmeterPage } from "../dbmeter/dbmeter";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Button: any; 
  constructor(public navCtrl: NavController) {
  }

  DbMeter(){
    this.navCtrl.push(DbmeterPage); 
  }

  
}
