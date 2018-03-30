import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/providers';
import {ListPage} from "../list/list";
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
    email: '',
    password: ''
  };

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public toastCtrl: ToastController,
      public user: UserProvider,
  ) {
    //
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(ListPage);
    }, (err) => {
      this.navCtrl.push(ListPage);
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
