import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {
  title = 'first-angular-project';
  clickCount = 0

  handleClick() {
    this.clickCount++;
  }

}
