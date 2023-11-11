import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { LoginComponent } from './MyLogin/login/login.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'todos', component: TodosComponent}, 
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to the login page if the URL is empty
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    LoginComponent,
    AddTodoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
