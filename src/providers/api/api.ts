import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ApiProvider {
  url: string = 'http://192.168.0.214/apiesqueleto5dot6/api';
  headers:any;

  constructor(public http: HttpClient) {
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

  /*getHeaderDefault = (): Promise<{exists: boolean, itemValue: any}> =>{
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
  }*/
}
