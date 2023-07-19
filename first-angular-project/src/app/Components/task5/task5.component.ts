import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component {
  Username: string = ""
  isEnabled: boolean = true

  enableButton() {
    this.isEnabled = !this.isEnabled;
  }

}
