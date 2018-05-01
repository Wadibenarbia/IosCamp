import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://192.168.1.67:3000/user/test@test.fr';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  getUsers() {
    return new Promise(resolve => {
    this.http.get(this.apiUrl).subscribe(data => {
    resolve(data);},
    err => {
    console.log(err);
    });
    });
  }
}