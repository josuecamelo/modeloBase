///import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SQLite} from "@ionic-native/sqlite";

/*
  Generated class for the DbAppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbAppProvider {

  constructor(private sqlite: SQLite) {
    //console.log('Hello DbAppProvider Provider');
  }

  createDatabase(){
      this.sqlite.create({
        name: 'app.db',
        location: 'default'
      }).then(onfulfiled => {
          console.log('banco criado');
      }).catch(e => console.log(e));
  }
}
