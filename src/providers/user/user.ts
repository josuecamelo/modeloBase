import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {
  _user: any;

  constructor() { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  getUser() {
    /*this.http
     .get('http://localhost:8000/api/products', {headers: headers})
     .subscribe(
     data => this.products = data
     err => {
     if (err.status === 401) {
     console.log(err.status);
     this.http.post('http://localhost:8000/api/refresh_token', {}, {headers: headers})
     .subscribe(data => {
     this.jwtToken.token = data['token'];

     //fazendo requisição de produto novamente
     console.log('requisitando listagem de produtos novamente');
     let headers = new HttpHeaders({
     'Authorization': `Bearer ${this.jwtToken.token}`,
     'Content-Type': 'application/json'
     });
     this.http
     .get('http://localhost:8000/api/products', {headers: headers})
     .subscribe(data => this.products = data);
     });
     }
     }
     );*/
    //this.settings.getValue('token').then((res)=> {
      //let token_ = res.itemValue;
      /*let headers = new HttpHeaders({
        'Authorization': `Bearer ${token_}`,
        'Content-Type': 'application/json'
      });

      let seq = this.api.get('user',{},{headers: headers}).pipe();
      seq.subscribe((res: any) => {
        console.log(res);
      }, err => {
        console.error('ERROR', err);
      });

      return seq;*/

      /*;
      }
       */
  }
}
