import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
@Component({
  selector: 'app-chatbot-ui',
  standalone: true,
  imports: [CommonModule,CardModule,NgStyle,FormsModule,ReactiveFormsModule,InputTextareaModule,ButtonModule],
  templateUrl: './chatbot-ui.component.html',
  styleUrl: './chatbot-ui.component.css'
})
export class ChatbotUiComponent {
  inputtext:string = ''
  messages: any[] = [{
    from: "BOT",
    message: "Hi, I am a chatbot. How can I help you?"
  },{
    from: "HUMAN",
    message: "Hi, I am a chatbot. How can I help you?"
  }]




  addMessage(){
    if(!this.inputtext) return
    this.messages.push({
      from: "HUMAN",
      message: this.inputtext
    })
    this.inputtext ="";
  }
}
