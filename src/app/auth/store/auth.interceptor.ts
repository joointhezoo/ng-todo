import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromApp from '../store/auth.reducers';

@Injectable
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.State>) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}
