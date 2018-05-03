import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class AuthServiceProvider {
  apiUrl = 'http://172.16.1.204:3000'
  constructor(public http: HttpClient) {}
  
    postAuth(data) {
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl + '/connect', JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/JSON'
          }
        })
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }
}
  
