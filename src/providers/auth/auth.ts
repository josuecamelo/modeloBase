import { Injectable } from '@angular/core';
import {ApiProvider} from "../api/api";
import {SettingsProvider} from "../settings/settings";

//const USER_KEY = 'user';
const TOKEN_KEY = 'token';

@Injectable()
export class AuthProvider {
  public check: Boolean = false;
  public user:any;
  public _token:any;

  redirectAfterLogin = 'ListPage';

  constructor(private api: ApiProvider, settings: SettingsProvider )
  {
    this.check = this._token ? true : false;
  }

  autenticateUser(accountInfo) {
    let seq = this.api.post('login/v1', accountInfo).pipe();

    seq.subscribe((data: any) => {
      this.check = true;
      this._token = data.data.token;
      this.setToken(this._token);
    });
  }

  setToken(token:string){
    console.log(token);
  }
}
