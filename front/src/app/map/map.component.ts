import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map: L.Map;
  private centroid: L.LatLngExpression = [48.856614, 2.3522219]; //

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="https://carto.com/">carto.com</a> contributors'
    });

    Array(5).fill(this.centroid).map(
      x => [x[0] + (Math.random() - .5)/10, x[1] + (Math.random() - .5)/10 ]
    ).map(
      x => L.marker(x as L.LatLngExpression)
    );
    tiles.addTo(this.map);
  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

}
