import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Username: string = ""
  ReadOnly: boolean = true
  enableButton() {
    this.ReadOnly = !this.ReadOnly;
  }
}
