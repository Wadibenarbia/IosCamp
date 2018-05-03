import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tab, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/authentification/authentification';
import { TabsPage } from '../tabs/tabs';
import { AboutPage } from '../about/about';
import { Headers } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public alertCtrl : AlertController, 
              public authServiceProvider: AuthServiceProvider,
              private storage: Storage) {
  }

  doLogin(){
    if (this.email.value || this.password.value) 
    {
      let data = {
        "email": this.email.value
      }
      this.authServiceProvider.postAuth(data)
        .then(data => {
          if (data["Result"] == 0) {
            this.navCtrl.push(TabsPage);
            let alert = this.alertCtrl.create({
              title: "Login Successful",
              subTitle: "You are logged in",
              buttons: ["OK"]
            });
            alert.present();
            this.storage.set('connected', 'true');
            this.storage.set('email', this.email.value);
            this.navCtrl.push(AboutPage);
          }
          else {
            let alert = this.alertCtrl.create({
              title: "Error",
              subTitle: "Incorrect email or password",
              buttons: ["OK"]
            });
            alert.present();
          }
        });
    }
    else
    {
        let alert = this.alertCtrl.create({
          title: "Error",
          subTitle: "Manquant",
          buttons: ["OK"]
      });
      alert.present();
    }
}

  doLogout(){}

  ionViewDidLoad() {}
}
