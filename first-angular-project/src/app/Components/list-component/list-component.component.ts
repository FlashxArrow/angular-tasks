import { Component } from '@angular/core';
import { Tasks } from './tasks';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent {

  tasksList: Tasks[] = [{ id: 1, text: "Go to gym" },
  { id: 2, text: "Buy milk" },
  { id: 3, text: "Go to gym" }];

  onTaskDeleted(task: Tasks) {
    const index = this.tasksList.indexOf(task);
    console.log(index);
    if (index !== -1) {
      this.tasksList.splice(index, 1);
    }
  }
}
