import { Routes } from '@angular/router';
import { ChatbotUiComponent } from './chatbot-ui/chatbot-ui.component';
import { SettingComponent } from './setting/setting.component';
import { SupportComponent } from './support/support.component';

export const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'chatbot-ui'},
  {path:'chatbot-ui',component:ChatbotUiComponent},
  {path:'setting',component:SettingComponent},
  {path:'support',component:SupportComponent},
];
