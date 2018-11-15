import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {TodoItem} from './todo-list.model';
import {TodoService} from '../todo.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  allItems: any = [];
  todoItem = [];
  clearItem = [];
  uid = null;

  constructor(private todoService: TodoService, private http: HttpClient, private authService: AuthService) {}

  ngOnInit() {
    this.getDb();
  }

  getDb() {
    this.uid = this.authService.userId;
    let url = 'https://ng-todo-2261d.firebaseio.com/todo.json';
    if (this.uid) {
      url = 'https://ng-todo-2261d.firebaseio.com/my-todo/' + this.uid + '.json';
    }

    this.http.get(url)
      .subscribe(
        res => {
          this.allItems = res;
          this.todoService.updateTodo(this.allItems);
          if (this.allItems !== null) {
            this.allItems.forEach(item => {
              if ( item['hide'] !== undefined ) { delete item['hide']; }
            });
            this.getItem();
          } else {
            this.allItems = [];
          }
        });
  }

  getItem() {
    this.todoService.getFinished().subscribe(res => this.clearItem = res);
    this.todoService.getUnFinished().subscribe(res => this.todoItem = res);
    this.todoService.saveTodo(this.allItems, this.uid);
  }

  onItemClick(item: TodoItem) {
    item.isFinished = !item.isFinished;
    this.todoService.updateTodo(this.allItems);
    this.getItem();
  }

  onAddItem(newItem) {
    if (newItem.value === '') {
      return false;
    }

    this.allItems.push({
      content: newItem.value,
      isFinished: false
    });
    newItem.value = '';
    this.todoService.updateTodo(this.allItems);
    this.getItem();
  }

  onClear() {
    this.todoService.getUnFinished().subscribe(res => this.allItems = res);
    this.clearItem = [];
    this.todoService.saveTodo(this.allItems, this.uid);
  }

  onSearchItem(term: string) {

    if (term === '') {
      this.allItems.forEach(item => {
        if ( item['hide'] !== undefined ) { delete item['hide']; }
      });
      return false;
    }

    this.allItems.forEach(item => {
      item['hide'] = item.content.match(term) === null;
    });

    this.todoService.updateTodo(this.allItems);
    this.getItem();

  }

  onLogout() {
    this.authService.logout();
  }
}
