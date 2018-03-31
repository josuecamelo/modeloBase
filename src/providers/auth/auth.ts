import { Injectable } from '@angular/core';

import {ApiProvider} from "../api/api";
import {SettingsProvider} from "../settings/settings";

const USER_KEY = 'user';

@Injectable()
export class AuthProvider {
  public check: Boolean = false;
  public user:any;
  //redirectAfterLogin = 'ListPage';

  constructor(
     public api: ApiProvider,
     //public localStorage: SettingsProvider
  ) {
    console.log('Hello AuthProvider Provider');
  }

  autenticateUser(accountInfo) {
    // let seq = this.api.post('login/v1', accountInfo).pipe();
    //
    // seq.subscribe((res: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   /*if (res.status == 'success') {
    //    this._loggedIn(res);
    //    } else {
    //    }*/
    //   console.log(res.success)
    //   console.log('passou no login');
    //   console.log(res);
    // }, err => {
    //   console.error('ERROR', err);
    // });

    // let seq = this.api.post('login/v1', accountInfo).pipe();
    //
    // seq.subscribe((data: any) => {
    //   // If the API returned a successful response, mark the user as logged in
    //   /*if (res.status == 'success') {
    //    this._loggedIn(res);
    //    } else {
    //    }*/
    //   console.log(data.success)
    //   console.log('passou no login');
    //   console.log(data);
    // //}//, err => {
    //   //console.error('ERROR', err);
    // });
    console.log(accountInfo);
  }
}
