// src/app/app.component.ts
import { Component } from '@angular/core';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoContainerComponent],
  template: `<app-todo-container></app-todo-container>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
