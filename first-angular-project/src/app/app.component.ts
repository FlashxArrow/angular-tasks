import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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