import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  token: string;
  userId: string;

  constructor(private router: Router) {}

  // TODO: 토큰관리 (로그인/로그아웃)
  signup (uid: string, upwd: string) {
    firebase.auth().createUserWithEmailAndPassword(uid, upwd)
      .catch(
      err => alert(err.message)
    );
  }

}
