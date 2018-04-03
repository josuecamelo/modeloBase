import { Injectable } from '@angular/core';
import {ApiProvider} from "../api/api";
import {DbAppProvider} from "../db-app/db-app";
import {SQLiteObject} from "@ionic-native/sqlite";
import {HttpHeaders} from "@angular/common/http";

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
      //console.log(this.obterToken());
      //this.refreshToken();
    });

    return seq;
  }

  //GESTÃO DE TOKEN
  gravarToken(token: any){
    /*this.dbApp.getSqlLiteInstanace().then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO autenticacao(token) values(?)',[token]).then(()=> {
        //
      }).catch((error) => console.log(error));
    }).catch(e => console.log(e));*/

    this.dbApp.getSqlLiteInstanace().then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM autenticacao WHERE id = 1',[]).then((rs)=> {
        if(rs.rows.length == 0) {
          this.dbApp.getSqlLiteInstanace().then((db: SQLiteObject) => {
            db.executeSql('INSERT INTO autenticacao(token) values(?)',[token]).then(()=> {
              //
            }).catch((error) => console.log(error));
          }).catch(e => console.log(e));
        }else{
          this.atualizarToken(token);
        }
      }).catch((error) => console.log(error));
    });
  }

  obterToken(){
    this.dbApp.getSqlLiteInstanace().then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM autenticacao WHERE id = 1',[]).then((rs)=> {
        if(rs.rows.length > 0) {
          let dadosAuth = rs.rows.item(0);
          this._token = dadosAuth.token;
        }
      }).catch((error) => console.log(error));
    });

    return this._token;
  }

  atualizarToken(token:any){
    this.dbApp.getSqlLiteInstanace().then((db: SQLiteObject) => {
      db.executeSql('UPDATE autenticacao SET token = ? WHERE id = 1',[token]).then(()=> {
        //this._token = token;
      }).catch((error) => console.log(error));
    }).catch(e => console.log(e));
  }

  refreshToken(){
    this.api.post('refresh_token',{}, {headers: this.getHeaderDefault()}) .subscribe(data => {
      this.atualizarToken( data['token'] ) ;
    });
  }

  getHeaderDefault(){
    return new HttpHeaders({
      'Authorization': `Bearer ${this.obterToken()}`,
      'Content-Type': 'application/json'
    });
  }
}
