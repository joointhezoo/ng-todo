import { Component, OnInit } from '@angular/core';
import { enableProdMode } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  private date;

  constructor(){
    this.date = new Date();
  };

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDKO9N300zqhQrreLWHLOxZzbA4jnEwNEM",
      authDomain: "ng-todo-2261d.firebaseapp.com",
      databaseURL: "https://ng-todo-2261d.firebaseio.com"
    });
  }
}
/*
enableProdMode();*/
