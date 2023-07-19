import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../tasks';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent {
  @Input() task!: Task;
  @Output() taskDeleted = new EventEmitter<Task>();

  handleClickDelete() {
    this.taskDeleted.emit(this.task);
  }
}
