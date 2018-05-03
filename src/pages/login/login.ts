import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AboutPage} from '../about/about';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:string = '';
  password:string = '';

  constructor(public navCtrl: NavController, private storage: Storage ) {
  storage.set('user_email', 'test@test.fr');
}

  ionViewDidLoad() {
    console.log('Hello in LoginPage');
  }
}
