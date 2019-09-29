import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'Fazer Café', false));
    this.todos.push(new Todo(2, 'Passear com o cachorro', true));
    this.todos.push(new Todo(3, 'Caminhar', false));
  }
}
