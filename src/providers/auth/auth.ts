import { Injectable } from '@angular/core';
import {ApiProvider} from "../api/api";
import {SettingsProvider} from "../settings/settings";
import {tokenize} from "@angular/compiler/src/ml_parser/lexer";

//const USER_KEY = 'user';
const TOKEN_KEY = 'token';

@Injectable()
export class AuthProvider {
  public check: Boolean = false;
  public user:any;
  public _token:any;

  redirectAfterLogin = 'ListPage';

  constructor(private api: ApiProvider, public settings: SettingsProvider )
  {
    this.check = this._token ? true : false;
  }

  autenticateUser(accountInfo) {
    let seq = this.api.post('login/v1', accountInfo).pipe();

    seq.subscribe((data: any) => {
      this.check = true;
      this._token = data.data.token;
      this.settings.setValue(TOKEN_KEY, (this._token));

      /*this.settings.getValue(TOKEN_KEY).then((res)=> {
        alert( res.itemValue );
      });*/
    });

    return seq;
  }
}
