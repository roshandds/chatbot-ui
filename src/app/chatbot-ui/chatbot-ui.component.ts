import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-chatbot-ui',
  standalone: true,
  imports: [CommonModule,CardModule],
  templateUrl: './chatbot-ui.component.html',
  styleUrl: './chatbot-ui.component.css'
})
export class ChatbotUiComponent {

}
