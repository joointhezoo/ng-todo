import { Component, OnInit, Input } from '@angular/core';
import {TodoItem} from '../todo-list.model';

import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  animations: [
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-50px)'
        }),
        animate(500)
      ])
    ])
  ]
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;

  constructor() { }

  ngOnInit() {

  }


}
