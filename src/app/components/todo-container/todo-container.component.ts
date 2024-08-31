// src/app/components/todo-container/todo-container.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoPresenterComponent } from '../todo-presenter/todo-presenter.component';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-container',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoPresenterComponent],
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent {
  todos: Todo[] = [];
  nextId = 1;
  newTodoTitle = '';

  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.todos.push({
        id: this.nextId++,
        title: this.newTodoTitle,
        isCompleted: false,
      });
      this.newTodoTitle = '';
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  editTodo(updatedTodo: Todo) {
    const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todos[index] = updatedTodo;
    }
  }

  toggleTodoCompletion(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.isCompleted = !todo.isCompleted;
    }
  }
}
