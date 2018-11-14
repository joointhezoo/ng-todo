import { Component, OnInit } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { FIREBASE_API_KEY } from '../config';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  date;

  constructor() {
    this.date = new Date();
  }

  ngOnInit() {
    firebase.initializeApp(FIREBASE_API_KEY);
  }
}
/*
enableProdMode();*/
