import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPage } from '../../pages/login/login' ;
import { NavParams} from 'ionic-angular';

@Injectable()
export class RestProvider {
  constructor(public http: HttpClient) {
  }

  getUsers(url) {
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
