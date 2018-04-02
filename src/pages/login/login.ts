import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/providers';
import {HomePage} from "../home/home";
//import { HttpClient, HttpHeaders } from '@angular/common/http';

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
      //public navParams: NavParams,
      public toastCtrl: ToastController,
      public auth: AuthProvider,
  ) {
    //
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    //this.auth.autenticateUser(this.account).subscribe((res) =>{
      //console.log(res.success == true);
    //});

    this.auth.autenticateUser(this.account).subscribe((resp) => {
      this.navCtrl.push(HomePage);
    }, (err) => {
      this.navCtrl.push(HomePage);
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
