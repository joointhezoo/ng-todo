import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TodoList } from './todo-list.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.Native

})
export class TodoListComponent implements OnInit {

  allItems: TodoList[];
  todoItem: TodoList[];
  clearItem: TodoList[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getItem();
  }

  getItem() {
    this.todoService.getTodos().subscribe(items => {
      this.allItems = items});

    this.todoService.getFinished().subscribe(clearLists => this.clearItem = clearLists );
    this.todoService.getUnFinished().subscribe(unclearLists => this.todoItem = unclearLists);

  }

  onItemClick(item: TodoList) {
    item.isFinished = !item.isFinished;
    this.todoService.updateTodo(this.allItems);
    this.getItem();
  }

  onAddItem(newItem) {
    if(newItem.value === ""){
      return false;
    }

    this.allItems.push({
      content: newItem.value,
      isFinished: false
    });
    newItem.value = "";
  }

  onClear(){
    this.allItems = this.todoService.cleanFinished();
    this.clearItem = [];
  }

  onSearchItem(term: string){
    if(term == ""){
      this.allItems.filter(item => {
        item.hide !== undefined ? delete item.hide : null;
      });
      return false;
    }

    this.allItems.filter(item => {
      item.hide = item.content.match(term) === null;
    });

    this.getItem();

  }
}
