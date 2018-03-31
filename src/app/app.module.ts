import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import { ApiProvider, UserProvider, AuthProvider } from '../providers/providers';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
//import { JwttokenProvider } from '../providers/jwttoken/jwttoken';

/*export function provideSettings(storage: Storage) {
  return new SettingsProvider(storage, {
    option1: true,
    option2: 'App Teste',
    option3: '3',
    option4: 'Hello'
  });
}*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},// Keep this to enable Ionic's runtime error handling during development
    //{ provide: SettingsProvider, useFactory: provideSettings, deps: [Storage] }, //Usando provider de Setting(SettingsProvider)
    ApiProvider,
    UserProvider,
    AuthProvider,
    //JwttokenProvider,
  ]
})
export class AppModule {}
