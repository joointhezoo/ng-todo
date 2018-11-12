import { Injectable } from '@angular/core';
import { TodoList, TodoLists } from './todo-list/todo-list.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList = TodoLists;

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
