import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import {AuthProvider} from "../providers/auth/auth";

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
    authReq = null;

    constructor(private auth: AuthProvider) {

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
                        this.auth.refreshToken();
                        /*this.authReq = req.clone({
                            headers: req.headers
                                .set("Authorization", `Bearer ${this.auth.obterToken()}`)
                                .set('Content-Type', 'application/json')
                        });
                        return next.handle(this.authReq);*/
                    }else{
                        console.log('401 sem estar autenticado.');
                    }
                }
                return Observable.throw(error);
            }) as any;
    }
};