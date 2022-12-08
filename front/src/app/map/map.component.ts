import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import axios from 'axios';
import { HttpClient } from "@angular/common/http";


export interface Specialite{
  specialite: string, pays: string, capitale: string, lattitude:number, longitude: number,
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map: L.Map;
  private centroid: L.LatLngExpression = [48.856614, 2.3522219]; //


  public getData(){
    return this.http.get<Specialite[]>('http://localhost:5000/specialite')
  }

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

    this.getData().subscribe((data) => {
      for (const item of data){
        const marker = L.marker([item.lattitude,item.longitude]).addTo(this.map)
        const txt = `${item.pays}, Culinary Speciality : ${item.specialite}`;
        marker.bindPopup(txt);
      }
    });
  }

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.initMap();
  }

}
