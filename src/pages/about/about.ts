import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest' ;
import { Storage } from '@ionic/storage';



@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
  user:string;
  apiUrl:string = 'http://172.16.1.204:3000/user/';
  myusers: any;

  constructor(public navCtrl: NavController,
              public restProvider: RestProvider,
              private storage: Storage) {
  }

  ionViewDidLoad() {
    this.getStorageValues();
  }

  getStorageValues() {
    this.storage.get('user_email').then((val) => {
      this.user = val;
      this.apiUrl = this.apiUrl + this.user;
      console.log(val);
      this.getUsers(this.apiUrl);
    });
  }

  getUsers(url) {
    this.restProvider.getUsers(url)
    .then(data => {
      this.myusers = data;
      console.log(this.myusers);
    });
  }
}
  constructor(public navCtrl: NavController) {}

  slider = [
    {
      title: "Slide1",
      description: "c'est la premiere slide",
      image: "../../assets/imgs/Healthkit_slide1.png"
    },
    {
      title: "Slide2",
      description: "c'est la deuxieme slide",
      image: "../../assets/imgs/Healthkit_slide2.png"
    },
    {
      title: "Slide3",
      description: "c'est la troisieme slide",
      image: "../../assets/imgs/Healthkit_slide3.jpg"
    }
  ];
}
