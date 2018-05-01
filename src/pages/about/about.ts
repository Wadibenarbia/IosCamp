import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest' ;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  myusers: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
  this.getUsers();
  }

getUsers() {
this.restProvider.getUsers()
.then(data => {
this.myusers = data;

console.log(this.myusers);
});

  }

}
