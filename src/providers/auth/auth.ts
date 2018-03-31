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
    this.check = this._token ? true : false;
  }

  autenticateUser(accountInfo) {
    let seq = this.api.post('login/v1', accountInfo).pipe();

    seq.subscribe((data: any) => {
      this.check = true;
      this._token = data.data.token;
      //this.setTokenInStorage(this._token);
      //this.getUser();
      //console.log(this.getTokenInStorage());
    });
  }

  /*
      Metodo TOKEN set and get
   */
  getTokenInStorage() {
    //return this.localStorage.getValue(TOKEN_KEY);
  }

  setTokenInStorage(value) {
    //value ? this.localStorage.setValue(TOKEN_KEY, value) : this.localStorage.remove(TOKEN_KEY);
  }
}
