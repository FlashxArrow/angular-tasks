import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myLabel: string = "Show"
  isVisible: boolean = true

  showButton() {
    if (this.myLabel == "Show") {
      this.myLabel = "Hide"
      this.isVisible = !this.isVisible
    }
    else {
      this.myLabel = "Show"
      this.isVisible = !this.isVisible
    }
  }

}
