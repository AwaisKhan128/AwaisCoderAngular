import { Component, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo; 
  @Output()
  todoDelete: EventEmitter<Todo> = new EventEmitter; 

  @Output()
  todoCheckbox: EventEmitter<Todo> = new EventEmitter; 

  constructor() { }

  ngOnInit(): void {
  }

  OnClick(todo:Todo)
  {
    this.todoDelete.emit(todo)
    console.log("Button has been trigerred");
  }
  OnCheckBoxClicked(todo:Todo)
  {
    console.log(todo);
    this.todoCheckbox.emit(todo)
    
  }

}
