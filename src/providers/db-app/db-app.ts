///import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";

/*
  Generated class for the DbAppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const DATABASE_SCHEMA = [
    `DROP TABLE IF NOT EXISTS operadoras`,
    `CREATE TABLE IF NOT EXISTS operadoras(
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        nome VARCHAR(255)                        
    )`,
    `CREATE TABLE IF NOT EXISTS contatos(
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        nome VARCHAR(255) NOT NULL,                        
        email VARCHAR(255) NOT NULL,
        operadora_id INTEGER NOT NULL
    )`
];

const OPERADORAS_DATA = [
    ['INSERT INTO operadoras(nome) values(?)',['CLARO']],
    ['INSERT INTO operadoras(nome) values(?)',['OI']],
    ['INSERT INTO operadoras(nome) values(?)',['VIVO']],
    ['INSERT INTO operadoras(nome) values(?)',['TIM']],
];

@Injectable()
export class DbAppProvider {

  constructor(private sqlite: SQLite) {
    //console.log('Hello DbAppProvider Provider');
  }

  createDatabase(){
      this.getSqlLiteInstanace().then((db: SQLiteObject) => {
          db.sqlBatch(DATABASE_SCHEMA).then(()=> {
              return db.sqlBatch(OPERADORAS_DATA)
          }).then(()=> {
              console.log('BANCO DE DADOS CRIADO E DADOS INICIAIS GERADOS.');
          }).catch((error) => console.log(error))
      }).catch(e => console.log(e));
  }

  getSqlLiteInstanace(){
      return  this.sqlite.create({
          name: 'app.db',
          location: 'default'
      });
  }
}
