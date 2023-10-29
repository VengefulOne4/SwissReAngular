import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private messagesSubject = new BehaviorSubject<string[]>([]);
  messages$ = this.messagesSubject.asObservable();

  addMessage(message: string) {
    const updatedMessages = [...this.messagesSubject.value, message];
    this.messagesSubject.next(updatedMessages);
  }
}