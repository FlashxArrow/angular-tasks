import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component {
  myLabel: string = "Show"
  isVisible: boolean = true
  names: string[] = ["Valentina", "Elisei", "Sami", "Darian"]

  toggleList() {
    this.isVisible = !this.isVisible
    if (this.myLabel == "Show") {
      this.myLabel = "Hide"
    }
    else {
      this.myLabel = "Show"
    }
  }

}
