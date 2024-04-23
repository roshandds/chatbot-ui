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
    message: "Hi, I am a chatbot. How can I help you?",
    profileImg:'../../assets/download.png'
  }
  ,{
    from: "HUMAN",
    message: "Hi, I am a chatbot. How can I help you?",
    profileImg:'../../assets/user35.png'
    // profileImg:'https://img.icons8.com/fluency-systems-filled/35/guest-male.png'
  }
]




  addMessage(){
    if(!this.inputtext) return
    this.messages.push({
      from: "HUMAN",
      message: this.inputtext
    })
    this.inputtext ="";
  }
}
