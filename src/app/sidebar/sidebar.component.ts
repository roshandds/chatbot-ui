import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {DropdownModule} from 'primeng/dropdown'
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [DropdownModule,RouterModule,InputSwitchModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
messageicon:string='../../assets/message-circle-svgrepo-com.svg'
settingicon:string='../../assets/setting-svgrepo-com.svg'
supporticon:string='../../assets/help-circle-filled-svgrepo-com.svg'
shareicon:string='../../assets/share.png'

router=inject(Router)


redirectToComponent(){

}
gotochatbot(){
this.router.navigate(['chatbot-ui']);
console.log('gotochatbot', this.router.url);
}

gotosupport(){
this.router.navigate(['support']);
console.log('gotochatbot', this.router.url);

}

gotosettings(){
console.log('gotochatbot', this.router.url);
this.router.navigate(['setting']);
}
}
