import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponentComponent } from './Components/list-component/list-component.component';
import { TaskComponentComponent } from './Components/list-component/task-component/task-component.component';
import { Task3Component } from './Components/task3/task3.component';
import { Task4Component } from './Components/task4/task4.component';
import { Task5Component } from './Components/task5/task5.component';
import { Task6Component } from './Components/task6/task6.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    TaskComponentComponent,
    Task3Component,
    Task4Component,
    Task5Component,
    Task6Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
