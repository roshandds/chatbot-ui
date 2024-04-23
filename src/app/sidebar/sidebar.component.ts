import { Component, inject, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import {DropdownModule} from 'primeng/dropdown'
import { InputSwitchModule } from 'primeng/inputswitch';
import { filter } from 'rxjs';
import { NgStyle } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [DropdownModule,RouterModule,InputSwitchModule,NgStyle,TooltipModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
messageicon:string='../../assets/chat-svgrepo-com.svg'
settingicon:string='../../assets/settings.svg'
supporticon:string='../../assets/support.svg'
shareicon:string='../../assets/shre.svg'

router=inject(Router)

currentRouteUrl:string="chatbot-ui";

constructor(){}
menuitems:{}[]=[
  {label:'chatbot-ui',route:'/chatbot-ui'},
  {label:'setting',route:'/setting'},
  {label:'support',route:'/support'},
  {label:'share',route:'/share'}
]
ngOnInit(): void {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.currentRouteUrl = event.url;
      console.log(this.currentRouteUrl,"currentroute");
    }
  });
  }





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

gotoshare(){
  console.log('gotoshare', this.router.url);
  this.router.navigate(['share']);
}

}
