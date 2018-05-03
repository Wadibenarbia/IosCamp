import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

let apiUrl = 'http://54.38.32.140:5000/'

@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClientModule) {}
  
    post(credentials, apiUrl){

    }
  }
  
