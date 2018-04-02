import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {SettingsProvider} from "../../providers/settings/settings";
import {HttpHeaders} from "@angular/common/http";
//import {DbAppProvider} from "../../providers/db-app/db-app";
//import {SQLiteObject} from "@ionic-native/sqlite";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  contatos = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: ApiProvider,
              public settings: SettingsProvider
  ) {

  }

  ionViewDidLoad() {
    /*this.dbApp.getSqlLiteInstanace().then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM contatos',[]).then((rs)=> {
        for(let i = 0; i <= rs.rows.length; i++){
          let contato = rs.rows.item(i);
          this.contatos.push(contato);
        }
      }).catch((error) => console.log(error));
    });*/


    //teste de consulta de dados
    this.settings.getValue('token').then((res)=> {
      let token_ = res.itemValue;

      let headers = new HttpHeaders({
        'Authorization': `Bearer ${token_}`,
        'Content-Type': 'application/json'
      });

      let seq = this.api.get('user',{},{headers: headers}).pipe();
      seq.subscribe((res: any) => {
        console.log(res);
      }, err => {
        console.log('Erro ao Obter Dados');
        console.error('ERROR', err);
      });

      return seq;
    });
  }
}
