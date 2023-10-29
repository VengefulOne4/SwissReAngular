import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../people.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() people: number[] = [];
  people$: string[] = [];

  constructor(public peopleService: PeopleService) {}

  ngOnInit() {
  }
}
