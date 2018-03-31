import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  _user: any;

  constructor(public api: ApiProvider) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    //let seq = this.api.post('login', accountInfo);
    let seq = this.api.post('login/v1', accountInfo).pipe();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      /*if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }*/
      console.log(res.success)
      console.log('passou no login');
      console.log(res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }
}
