import { Injectable } from '@angular/core';
import {ApiProvider} from "../api/api";
import {DbAppProvider} from "../db-app/db-app";
import {SQLiteObject} from "@ionic-native/sqlite";

@Injectable()
export class AuthProvider {
  public check: Boolean = false;
  public user:any;
  public _token:any;

  redirectAfterLogin = 'ListPage';

  constructor(private api: ApiProvider, private dbApp: DbAppProvider )
  {
    this.check = this._token ? true : false;
  }

  autenticateUser(accountInfo) {
    let seq = this.api.post('login/v1', accountInfo).pipe();

    seq.subscribe((data: any) => {
      this.check = true;
      this._token = data.data.token;
      //this.settings.setValue(TOKEN_KEY, (this._token));

      /*this.settings.getValue(TOKEN_KEY).then((res)=> {
        alert( res.itemValue );
      });*/

      //gravar token no banco //gravando token para requisiçoes futura
      this.gravarToken(this._token);
      console.log(this.obterToken());
    });

    return seq;
  }

  //GESTÃO DE TOKEN
  gravarToken(token: any){
    this.dbApp.getSqlLiteInstanace().then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO autenticacao(token) values(?)',[token]).then(()=> {
        //
      }).catch((error) => console.log(error));
    }).catch(e => console.log(e));
  }

  obterToken(){
    this.dbApp.getSqlLiteInstanace().then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM autenticacao WHERE id = 1',[]).then((rs)=> {
        for(let i = 0; i <= rs.rows.length; i++){
          let dadosAuth = rs.rows.item(i);
          this._token = dadosAuth.token;
        }
      }).catch((error) => console.log(error));
    });

    return this._token;
  }

  atualizarToken(token:any){
    this.dbApp.getSqlLiteInstanace().then((db: SQLiteObject) => {
      db.executeSql('UPDATE autenticacao SET token = ? WHERE id = 1',[token]).then(()=> {
        this._token = token;
      }).catch((error) => console.log(error));
    }).catch(e => console.log(e));
  }
}
