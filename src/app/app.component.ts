import { Component, Input } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat';
  people: number[] = [1]; // Исходный список "person", начнем с одного "person"
  
  constructor(public peopleService: PeopleService) {}
}
