import {Component, EventEmitter, Output, ViewChild, Input} from "@angular/core";
import {TodoDataService} from "../todo-data-service/todo-data.service";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
})

export class TodoComponent {
  @Input() id: number;
  @Input() title: string = '';
  @Input() complete: boolean = false;
  @Output() todoAction = new EventEmitter<any>();
  @Output() removeAction = new EventEmitter<any>();
  constructor(private todoDataService: TodoDataService) {}
  todoComplete(event: any) {
   this.todoAction.emit(event);
  }

  destroyTodo(event: any) {
    this.removeAction.emit(event)
  }
}
