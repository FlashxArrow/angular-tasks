import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tasks } from '../tasks';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent {
  @Input() singleTask!: Tasks;
  @Output() taskDeleted = new EventEmitter<Tasks>();

  removeTask() {
    this.taskDeleted.emit(this.singleTask);
  }
}
