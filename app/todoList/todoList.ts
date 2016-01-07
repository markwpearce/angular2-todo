import {Component, Input} from 'angular2/core';
import {TodoItem} from '../todoItem/todoItem';
import {PrioritySortPipe} from '../util/pipe';

@Component({
  selector: 'todo-list',
  pipes: [PrioritySortPipe],
  styleUrls: ['app/todoList/todoList.css'],
  templateUrl: 'app/todoList/todoList.html'
})
export class TodoList {
  @Input() todos: TodoItem[];
  raisePriority(todo: TodoItem) : void {
    todo.priority--;
  }
  lowerPriority(todo: TodoItem) : void {
    todo.priority++;
  }
}
