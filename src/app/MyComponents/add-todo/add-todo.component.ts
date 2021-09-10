import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
title1:string;
desc1:string;

  @Output()
  todoAdd: EventEmitter<Todo> = new EventEmitter; 

  constructor() { 
    this.title1 = "";
    this.desc1 = "";
  }

  ngOnInit(): void {
    // console.log("Its working");
    // this.OnSubmit()

  }
  OnSubmit()
  {
    console.log("triggered on Submit");
    const todo ={
      sno : 8,
      title : this.title1,
      desc : this.desc1,
      active : true

    }
    this.todoAdd.emit(todo);
  }
  

}
