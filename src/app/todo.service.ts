import { Injectable } from '@angular/core';
import { TodoList, TodoLists } from './todo-list/todo-list.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList = TodoLists;
  tempArr = [];

  cleanFinsihed(): Observable<any> {
    this.tempArr = [];
    this.todoList.filter(i => i.isFinished === false ? this.tempArr.push(i): null);
    this.todoList = this.tempArr;
    return of(this.todoList);
  }

  getFinished(): Observable<any> {
    this.tempArr = [];
    this.todoList.filter(i => i.isFinished === true ? this.tempArr.push(i): null);
    return of(this.tempArr);
  }

  getTodos(): Observable<TodoList[]> {
    return of(this.todoList);
  }

  updateTodo(TodoLists){
    this.todoList = TodoLists;
    return this.todoList;
  }


}
