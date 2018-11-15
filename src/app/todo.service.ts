import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList = [];

  constructor() {}

  saveTodo(list, id) {
    const fireDb =  firebase.database();
    const refUrl = (id ? 'my-todo/' + id : 'todo');
    fireDb.ref(refUrl)
      .set(list);

  }

  getUnFinished() {
    const emptyArr = this.todoList.filter(i => !i.isFinished );
    this.todoList = emptyArr;
    return of(this.todoList);
  }

  getFinished(): Observable<any> {
    const emptyArr = this.todoList.filter(i => i.isFinished );
    return of(emptyArr);
  }

  updateTodo(list) {
    this.todoList = list;
    return this.todoList;
  }


}
