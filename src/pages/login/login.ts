import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OAuthService } from 'angular-oauth2-oidc';
import OktaAuth from '@okta/okta-auth-js';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('email') email:string = '';
  private password:string = '';

  constructor(public navCtrl: NavController, private oauthService: OAuthService) {
  }

  ionViewDidLoad() {
    console.log('Hello in LoginPage');
  }
}
