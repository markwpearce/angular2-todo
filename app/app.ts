import {Component} from 'angular2/core';
import {TodoItem} from './todoItem/todoItem';
import {TodoList} from './todoList/todoList';
import {TodoForm} from './todoForm/todoForm';

@Component({
  selector: 'todolist-app',
  templateUrl: 'app/app.html',
  directives: [TodoList, TodoForm]
})

export class TodoListApp {
  todos: TodoItem[] = [
      {text:'Learn Angular2', done:true, priority: 0},
      {text:'Build an Angular2 app', done:false, priority: 1}
  ];
  get remaining(): number {
    return this.todos.reduce((count, todo: TodoItem) => count + todo.done, 0);
  }
  archive(): void {
    var oldTodos = this.todos;
    this.todos = [];
    oldTodos.forEach((todo: TodoItem) => {
      if (!todo.done) this.todos.push(todo);
    });
  }
  addTask(task: TodoItem) {
    this.todos.push(task);
  }
}
