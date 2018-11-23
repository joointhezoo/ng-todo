import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    const uid =  form.value.id;
    const upwd = form.value.password;
    this.store.dispatch(new AuthActions.Login({username: uid, password: upwd}));
  }
}
