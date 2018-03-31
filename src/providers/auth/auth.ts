import { Injectable } from '@angular/core';
import {ApiProvider} from "../api/api";
import {SettingsProvider} from "../settings/settings";

const USER_KEY = 'user';
const TOKEN_KEY = 'token';

@Injectable()
export class AuthProvider {
  public check: Boolean = false;
  public user:any;
  public _token:any;

  redirectAfterLogin = 'ListPage';

  constructor(private api: ApiProvider,
              private localStorage: SettingsProvider)
  {
    //console.log('Hello AuthProvider Provider');
  }

  autenticateUser(accountInfo) {
    let seq = this.api.post('login/v1', accountInfo).pipe();

    seq.subscribe((data: any) => {
      // If the API returned a successful response, mark the user as logged in
      /*if (res.status == 'success') {
       this._loggedIn(res);
       } else {
       }*/
      console.log(data.success)
      console.log('passou no login');
      console.log(data);
    //}//, err => {
      //console.error('ERROR', err);
    });
  }

  
}
