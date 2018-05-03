import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: "page-about",
  templateUrl: "about.html"
})
export class AboutPage {
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
