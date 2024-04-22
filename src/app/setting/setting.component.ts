import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputSwitchModule } from 'primeng/inputswitch';
@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [InputSwitchModule,FormsModule,CommonModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {
  accountIcon:string="../../assets/account.svg"
  notificationIcon:string="../../assets/notification-svgrepo-com.svg"
  locationIcon:string="../../assets/location.svg"
  sidearrowIcon:string="../../assets/location.svg"

  showMap:boolean =false;
   KEY_VALUE_PAIR = new Map<string, string>([
    ['space','jump'],
    ['enter','hit']
  ]);
}
