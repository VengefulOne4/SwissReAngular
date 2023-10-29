import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent {
  message: string = '';
  messages: string[] = []; // Переменная для хранения сообщений собеседника
  
  constructor(private chatService: ChatService) {}
  
  sendMessage() {
    if (this.message.trim() !== '') {
      this.messages.push(this.message); // Добавить сообщение в массив сообщений
      this.chatService.addMessage(this.message);
      this.message = '';
    }
  }
}
