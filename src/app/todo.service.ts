import { Injectable } from '@angular/core';
import { TodoLists } from './todo-list/todo-list.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList = TodoLists;

  constructor(private http: HttpClient) {}

  saveTodo(list, id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

   const url = 'https://ng-todo-2261d.firebaseio.com/' + (id ? 'my-todo/' + id : 'todo') + '.json';
   this.http.put(url, list, httpOptions).subscribe(res => console.log(res));
  }

  getUnFinished() {
    const emptyArr = [];
    this.todoList.filter(i => i.isFinished === false ? emptyArr.push(i) : null);
    this.todoList = emptyArr;
    return of(this.todoList);
  }

  getFinished(): Observable<any> {
    const emptyArr = [];
    this.todoList.filter(i => i.isFinished === true ? emptyArr.push(i) : null);
    return of(emptyArr);
  }

  updateTodo(list) {
    this.todoList = list;
    return this.todoList;
  }


}
