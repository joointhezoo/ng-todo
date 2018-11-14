import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  token: string;
  userId: string;

  constructor(private router: Router) {}

  signup (uid: string, upwd: string) {
    firebase.auth().createUserWithEmailAndPassword(uid, upwd).then(
      res => this.login(uid, upwd)
    ).catch(
      err => alert(err.message)
    );
  }

  login (uid: string, upwd: string) {
    firebase.auth().signInWithEmailAndPassword(uid, upwd)
      .then(res => {
        this.userId = res.user.uid;
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        this.router.navigate(['/todo']);
      })
      .catch(
        err => alert('로그인 실패:' + err.message)
      );
  }

  logout () {
    this.token = null;
    this.router.navigate(['./signin']);
  }
}



/**
 * 토큰관리 (로그인/로그아웃)
 * 로그인
 * 로그아웃
 * 회원가입
 ** */
