import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
//import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private api: ApiProvider) {
    /*this.storage.set('token', 'josue');
    this.storage.get('token').then((value) => {
      console.log(value);
    }).catch((e) => console.log(e));*/
  }
  testeConsulta(){
    console.log('fazendo requisição');

    this.api.get('user').subscribe(data => {
      console.log(data);
    });
  }
}
