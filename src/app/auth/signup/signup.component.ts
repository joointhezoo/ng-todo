import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';

import * as AuthActions from '../store/auth.actions';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../signin/signin.component.scss', './signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const uid = form.value.id;
    const upwd = form.value.password;
    this.store.dispatch(new AuthActions.Signup({username: uid, password: upwd}));
  }
}
