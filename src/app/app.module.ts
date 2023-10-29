import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module'


import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ChatListComponent,
    HeaderComponent,
    SidebarComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
