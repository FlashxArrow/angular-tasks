import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent {
  @Input() singleTask!: string;
  @Output() taskDeleted = new EventEmitter<void>();

  removeTask() {
    this.taskDeleted.emit();
  }
}
