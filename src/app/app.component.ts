import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatbot';
  menuitems:{}[]=[
    {label:'chatbot-ui',route:'/chatbot-ui'},
    {label:'setting',route:'/setting'},
    {label:'support',route:'/support'}
  ]
  currentRouteUrl: string="";

  constructor(private router: Router) { }

  ngOnInit() {
     this.router.events.subscribe(event => {
       if (event instanceof NavigationEnd) {
         this.currentRouteUrl = event.url;
         console.log(this.currentRouteUrl,"currentroute");
       }
     });
  }

}
