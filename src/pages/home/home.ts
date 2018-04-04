import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private api: ApiProvider) {

  }
  testeConsulta(){
    console.log('fazendo requisição');

    this.api.get('user').subscribe(data => {
      console.log(data);
    });
  }
}
