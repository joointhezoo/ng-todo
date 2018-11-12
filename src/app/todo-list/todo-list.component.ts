import { Component, OnInit } from '@angular/core';
import { TodoList, TodoLists } from './todo-list.model';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items = TodoLists;

  constructor() { }

  ngOnInit() {
  }

  onItemClick(item: TodoList) {
    item.isFinished = !item.isFinished;
  }

  onAddItem(newItem) {
    this.items.push({
      content: newItem.value,
      isFinished: false
    });
    newItem.value = "";
  }
}
