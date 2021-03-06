import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DbAppProvider} from "../../providers/db-app/db-app";
import {SQLiteObject} from "@ionic-native/sqlite";
import {ListPage} from "../list/list";

/**
 * Generated class for the ContatosCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contatos-create',
  templateUrl: 'contatos-create.html',
})
export class ContatosCreatePage {
  name = '';
  email= '';
  telefone='';
  operadora_id = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbApp: DbAppProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatosCreatePage');
  }

  create(){
    this.dbApp.getSqlLiteInstanace().then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO contatos(nome, email, telefone, operadora_id) values(?,?,?,?)',[this.name,
        this.email, this.telefone, this.operadora_id]).then(()=> {
        this.navCtrl.push(ListPage);
      }).catch((error) => console.log(error));
    }).catch(e => console.log(e));
  }
}