import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Specialite} from "../map/map.component";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  speciality: string;
  country: string;
  capital: string
  latitude: number;
  longitude: number;

  onSpecialityCreate(speciality: Specialite){
    console.log(speciality)
    this.http.post('http://localhost:5000/specialite',speciality).subscribe()
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
}
