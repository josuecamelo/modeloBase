import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/providers';
import {ListPage} from "../list/list";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HttpParams} from "@angular/common/http";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account: { email: string, password: string } = {
    email: 'josueprg@gmail.com.br',
    password: '123456'
  };

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public toastCtrl: ToastController,
      public user: UserProvider,
      public http: HttpClient
  ) {
    //
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(ListPage);
    }, (err) => {
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: 'Colocar Texto de Erro',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
