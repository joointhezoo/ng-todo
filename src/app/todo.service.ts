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

  saveTodo() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    this.http.put('https://ng-todo-2261d.firebaseio.com/todo.json', this.todoList, httpOptions)
      .subscribe(
        res => {
          console.log(res);
        });

  }
/*
  getTodoDb() {
    this.http.get('https://ng-todo-2261d.firebaseio.com/todo.json')
      .subscribe(
        res => {
          console.log(1,this.todoList)
          this.todoList = res;
          console.log(1.5,this.todoList)
        },
        error => {
          this.todoList = TodoLists;
        });
  }*/


  cleanFinished(): Observable<any> {
    const ObsUnFinish = this.getUnFinished().value;
    return ObsUnFinish;
  }

  getUnFinished(): Observable<any> {
    const emptyArr = [];
    this.todoList.filter(i => i.isFinished === false? emptyArr.push(i): null);
    return of(emptyArr);
  }

  getFinished(): Observable<any> {
    const emptyArr = [];
    this.todoList.filter(i => i.isFinished === true ? emptyArr.push(i): null);
    return of(emptyArr);
  }

  getTodos(): Observable<TodoList[]> {
    return of(this.todoList);
  }

  updateTodo(TodoLists){
    this.todoList = TodoLists;
    return this.todoList;
  }


}
