import {Component, Output, EventEmitter} from 'angular2/core';
import {TodoItem} from '../todoItem/todoItem';
@Component({
  selector: 'todo-form',
  templateUrl: 'app/todoForm/todoForm.html'
})

export class TodoForm {
  @Output() newTask = new EventEmitter<TodoItem>();
  task: string = '';
  lastPriority: number = 2;
  addTodo() {
    if (this.task) {
      this.newTask.next({
        text: this.task,
        done: false,
        priority: this.lastPriority
      });
    }
    this.task = '';
    this.lastPriority++;
  }
}
