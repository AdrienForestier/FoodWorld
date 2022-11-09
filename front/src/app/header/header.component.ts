import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RegisterRestaurantComponent} from "../register-restaurant/register-restaurant.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void { }

  onCategoriesClick(){
    this.matDialog.open(RegisterRestaurantComponent)
  }

}
