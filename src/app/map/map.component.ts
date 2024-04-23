import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit{
  private map:any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 51.74787, -1.23492 ],
      zoom: 22
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

      L.marker([51.74787, -1.23492]).addTo(this.map);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
  }
