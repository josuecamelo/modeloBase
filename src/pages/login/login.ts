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
    email: 'josueprg@gmail.com',
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
    // this.user.login(this.account).subscribe((resp) => {
    //   this.navCtrl.push(ListPage);
    // }, (err) => {
    //   this.navCtrl.push(ListPage);
    //   // Unable to log in
    //   let toast = this.toastCtrl.create({
    //     message: 'Colocar Texto de Erro',
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // });
    
    
    //teste de request
    //console.log(this.account);
    /*this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
        data => { console.log( data )},
        err => console.error(err),
        () => console.log('done loading foods')
    );*/


    /*let ret = this.http.post('https://jsonplaceholder.typicode.com/posts', null, new HttpParams()).pipe();
    ret.subscribe((res: any) => {
      console.log(ret);
    }, err => {
      console.error('ERROR', err);
    });

  ret.subscribe((resp) => {
     console.log(resp)
    }, (err) => {
     console.log(err);
    });*/

    this.user.login(this.account).subscribe((resp) => {
      console.log('logou');
    }, (err) => {
      console.log('erro no login');
    });

  }
}
