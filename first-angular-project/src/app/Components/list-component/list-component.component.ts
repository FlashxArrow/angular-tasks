import { Component } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent {
  tasksList: string[] = ["Buy food", "Drink Water", "Run after dog"];

  onTaskDeleted(task: string) {
    const index = this.tasksList.indexOf(task);
    if (index !== -1) {
      this.tasksList.splice(index, 1);
    }
  }
}
