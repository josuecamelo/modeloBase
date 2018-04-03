import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AuthProvider, UserProvider } from '../../providers/providers';
import {ListPage} from "../list/list";

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
      //public navParams: NavParams,
      public toastCtrl: ToastController,
      public auth: AuthProvider,
      public user: UserProvider
  ) {
    //
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    this.auth.autenticateUser(this.account).subscribe((resp) => {
      this.navCtrl.push(ListPage);
    }, (err) => {
      this.navCtrl.push(LoginPage);

      // Unable to log in
      let toast = this.toastCtrl.create({
        message: err.error.error,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
