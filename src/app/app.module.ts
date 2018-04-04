import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import { ApiProvider, UserProvider, AuthProvider } from '../providers/providers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { DbAppProvider } from '../providers/db-app/db-app';
import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import {HttpsRequestInterceptor} from "../http-interceptor/httpinterceptor";


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
    IonicStorageModule.forRoot(),
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
    ApiProvider,
    UserProvider,
    AuthProvider,
    DbAppProvider,
    SQLite,
    DbAppProvider,
    Toast,
    {
     provide: HTTP_INTERCEPTORS,
     useClass: HttpsRequestInterceptor,
     multi: true
    },
  ]
})
export class AppModule {}
