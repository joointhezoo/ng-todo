import { Injectable } from '@angular/core';
import { TodoList, TodoLists } from './todo-list/todo-list.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList = TodoLists;

  constructor(private http: HttpClient) {}

  saveTodo(list) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.put('https://ng-todo-2261d.firebaseio.com/todo.json', list, httpOptions)
      .subscribe(
        res => {
          console.log('res',res);
        });
  }

  getUnFinished() {
    const emptyArr = [];
    this.todoList.filter(i => i.isFinished === false? emptyArr.push(i): null);
    this.todoList = emptyArr;
    return of(this.todoList);
  }

  getFinished(): Observable<any> {
    const emptyArr = [];
    this.todoList.filter(i => i.isFinished === true ? emptyArr.push(i): null);
    return of(emptyArr);
  }

  updateTodo(TodoLists){
    this.todoList = TodoLists;
    return this.todoList;
  }


}
