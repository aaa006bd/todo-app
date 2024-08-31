// src/app/components/todo-presenter/todo-presenter.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-presenter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-presenter.component.html',
  styleUrls: ['./todo-presenter.component.css']
})
export class TodoPresenterComponent {
  @Input() todos: Todo[] = [];
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() editTodo = new EventEmitter<Todo>();
  @Output() toggleTodoCompletion = new EventEmitter<number>();

  onDelete(id: number) {
    this.deleteTodo.emit(id);
  }

  onEdit(todo: Todo) {
    const newTitle = prompt("Edit task", todo.title);
    if (newTitle !== null) {
      this.editTodo.emit({ ...todo, title: newTitle });
    }
  }

  onToggle(id: number) {
    this.toggleTodoCompletion.emit(id);
  }
}
