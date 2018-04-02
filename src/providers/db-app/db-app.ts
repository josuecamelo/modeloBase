///import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";

const DATABASE_SCHEMA = [
    `DROP TABLE IF EXISTS operadoras`,
    `CREATE TABLE IF NOT EXISTS operadoras(
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        nome VARCHAR(255)                        
    )`,
    `DROP TABLE IF EXISTS contatos`,
    `CREATE TABLE IF NOT EXISTS contatos(
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        nome VARCHAR(255) NOT NULL,                        
        email VARCHAR(255) NOT NULL,
        telefone VARCHAR(255) NOT NULL,
        operadora_id INTEGER NOT NULL
    )`,
    `DROP TABLE IF EXISTS autenticacao`, //remover essa linha depois
    `CREATE TABLE IF NOT EXISTS autenticacao(
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        token TEXT NOT NULL
    )`
];

const OPERADORAS_DATA = [
    ['INSERT INTO operadoras(nome) values(?)',['CLARO']],
    ['INSERT INTO operadoras(nome) values(?)',['OI']],
    ['INSERT INTO operadoras(nome) values(?)',['VIVO']],
    ['INSERT INTO operadoras(nome) values(?)',['TIM']],
    ['INSERT INTO contatos(nome, email, telefone, operadora_id) values(?,?,?,?)',['Josué Camelo',
        'Josué Camelo', '(62) 99252-7138', 1]],
    ['INSERT INTO contatos(nome, email, telefone, operadora_id) values(?,?,?,?)',['Doraci Camelo',
        'Doraci Camelo', '(62) 99252-7139', 1]],
    ['INSERT INTO contatos(nome, email, telefone, operadora_id) values(?,?,?,?)',['Daniel Camelo',
        'Daniel Camelo', '(62) 99252-7140', 1]],
    ['INSERT INTO contatos(nome, email, telefone, operadora_id) values(?,?,?,?)',['Priscila Camelo',
        'Priscila Camelo', '(62) 99252-7141', 1]],
];

@Injectable()
export class DbAppProvider {

  constructor(private sqlite: SQLite) {

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
      return this.sqlite.create({
          name: 'app.db',
          location: 'default'
      });
  }
}
