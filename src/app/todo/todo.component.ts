import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() {  }

  name: string = "Angular Todo List"

  todo: boolean = true;
  completed: boolean = true;
  search: string = "";

  todos: TodoItem[] = [
    {
      id: 1, title: "Wash The Car", completed: true
    },
    {
      id: 2, title: "Go To The Market", completed: false
    },
    {
      id: 3, title: "Learn Angular", completed: false
    }
  ]


  addTodo(input: any) {
    if (input.value != "") {
      let data = { id: this.todos.length + 1, title: input.value, completed: false };
      this.todos.push(data);
      input.value = "";
    } else {
      alert("Text field cannot be empty.")
    }
  }

  
  deleteTodo(i: any) {
    this.todos.splice(i, 1);
  }

  getTodo() {
    if (this.completed) {
      return this.todos.filter(todo => todo.completed === true)
    } else if (this.todo) {
      return this.todos.filter(todo => todo.completed === false)
    }
    else {
      return this.todos
    }
  }

  completedCount() {
    return this.todos.filter(todo => todo.completed === false).length;
  }


  ngOnInit(): void {
  }

}
