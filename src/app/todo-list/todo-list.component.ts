import { Component, OnInit } from '@angular/core';
import { TodoList, TodoLists } from './todo-list.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items:TodoList[];
  clearItem: TodoList[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getItem();
    this.getClearItem();
  }

  getClearItem() {
    this.todoService.getFinished().subscribe(clearLists => this.clearItem = clearLists );
  }

  getItem() {
    this.todoService.getTodos().subscribe(items => {
      debugger;
      this.items = items});
  }

  onItemClick(item: TodoList) {
    item.isFinished = !item.isFinished;
    this.todoService.updateTodo(this.items);
    this.getItem();
    this.getClearItem();

  }

  onAddItem(newItem) {
    this.items.push({
      content: newItem.value,
      isFinished: false
    });
    newItem.value = "";
  }

  onClear(){
    this.todoService.cleanFinsihed().subscribe(clearLists => this.items = clearLists );
    this.clearItem = [];
  }
}
