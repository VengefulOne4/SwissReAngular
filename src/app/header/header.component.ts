import { Component, Input } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() people: number[];

  constructor(public peopleService: PeopleService) {}

  addPerson() {
    if (this.people.length < 9) {
      this.people.push(this.people.length + 1);
    }
  }
}
