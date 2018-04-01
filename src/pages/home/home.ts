import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage: Storage) {
    /*this.storage.set('token', 'josue');
    this.storage.get('token').then((value) => {
      console.log(value);
    }).catch((e) => console.log(e));*/
  }

}
