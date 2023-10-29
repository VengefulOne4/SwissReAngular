import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  peopleSubject = new BehaviorSubject<string[]>([]);
  people$ = this.peopleSubject.asObservable();

  addPerson(person: string) {
    const updatedPeople = [...this.peopleSubject.value, person];
    this.peopleSubject.next(updatedPeople);
  }
}