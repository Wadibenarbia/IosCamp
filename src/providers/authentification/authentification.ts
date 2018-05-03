import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class AuthServiceProvider {
  apiUrl = 'http://54.38.32.140:5000'
  constructor(public http: HttpClient) {}
  
    getAuth(email, password) {
      return new Promise(resolve => {
        this.http.get(this.apiUrl + '/connect/' + email + '/' + password + '/').subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    }


  }
  
