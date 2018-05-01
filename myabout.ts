import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  user_firstname:string = "wadi";

  constructor(public navCtrl: NavController ) {

  }
}
