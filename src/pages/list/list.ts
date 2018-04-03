import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DbAppProvider} from "../../providers/db-app/db-app";
import {SQLiteObject} from "@ionic-native/sqlite";
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  contatos = [];

  constructor(public navCtrl: NavController,
              //public navParams: NavParams,
              private dbApp: DbAppProvider,
              private toast: Toast
  ) {

  }

  ionViewDidLoad() {
    this.getData();
  };

  ionViewWillEnter() {
    //this.getData();
  }

  getData(){
    this.toast.show('Data saved', '5000', 'center').subscribe(
        (toast) => {
          this.navCtrl.popToRoot();
        }
    );

    this.dbApp.getSqlLiteInstanace().then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM contatos',[]).then((rs)=> {
        for(let i = 0; i < rs.rows.length; i++){
          let contato = rs.rows.item(i);
          this.contatos.push(contato);
        }
      }).catch((error) => console.log(error));
    });
  }
}
