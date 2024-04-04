import { Routes } from '@angular/router';
import { ChatbotUiComponent } from './chatbot-ui/chatbot-ui.component';

export const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'chatbot-ui'},
  {path:'chatbot-ui',component:ChatbotUiComponent},
];
