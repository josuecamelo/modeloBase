/*import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {SettingsProvider} from "../settings/settings";


@Injectable()
export class ApiProvider {
  url: string = 'http://localhost:8000/api';
  headers:any;

  constructor(public http: HttpClient, public settings: SettingsProvider) {
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }

  getHeaderDefault = (): Promise<{exists: boolean, itemValue: any}> =>{
    return new Promise<{exists: boolean, itemValue: any}>(res =>{
      this.settings.getValue('token').then((val)=> {
        if(val){
          res({exists: true, itemValue: new HttpHeaders({
            'Authorization': `Bearer ${val}`,
            'Content-Type': 'application/json'
            })
          });
        } else {
          res({exists: false, itemValue: val});
        }
      });
    });
  }
}
