import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss',
    '../signin/signin.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const uid = form.value.id;
    const upwd = form.value.password;

    this.authService.signup(uid, upwd);
  }
}
