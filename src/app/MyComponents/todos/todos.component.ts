import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
 
  localItem: string | null;
  todos:Todo[]=[ ];
 constructor(private router: Router) {
  this.localItem = localStorage.getItem("todos");
  if(this.localItem == null){
    this.todos = [];
  }else{
    this.todos = JSON.parse(this.localItem); 
   }
  
 }

 ngOnInit(): void{

 }

 deleteTodo(todo : Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos));
 }
 addTodo(todo : Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));

 }
 toggleTodo(todo : Todo){
  const index = this.todos.indexOf(todo);
  this.todos[index].active = !this.todos[index].active;
  localStorage.setItem("todos", JSON.stringify(this.todos));

  console.log(todo);
  
 }
}
 