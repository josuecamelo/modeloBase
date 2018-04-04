import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

import {AuthProvider} from "../providers/auth/auth";
import {App} from "ionic-angular";
import {LoginPage} from "../pages/login/login";

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
    authReq = null;

    constructor(private auth: AuthProvider,
                public appCtrl: App) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.auth.check){
            this.authReq = req.clone({
                headers: req.headers
                    .set("Authorization", `Bearer ${this.auth.obterToken()}`)
                    .set('Content-Type', 'application/json')
            });
            console.log('primeiro');
        }else{
            console.log('segundo');
            this.authReq = req;
        }

        return next.handle(this.authReq)
            .catch((error) => {
                if (error.status === 401 || error.status === 403) {
                    if(this.auth.check) {
                        console.log('401 estando autenticado');
                        console.log('tentando fazer refresh do token a refazendo a requisição');
                        this.auth.refreshToken();
                        console.log('refazendo requisição com novo token.');
                        this.authReq = req.clone({
                            headers: req.headers
                                .set("Authorization", `Bearer ${this.auth.obterToken()}`)
                                .set('Content-Type', 'application/json')
                        });
                        return next.handle(this.authReq);
                    }else{
                        console.log('401 sem estar autenticado.');
                        console.log('tentando redirecionar');
                        this.appCtrl.getRootNavs()[0].push(LoginPage);
                    }
                }
                return Observable.throw(error);
            }) as any;
    }
};