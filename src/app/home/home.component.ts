import { Component } from '@angular/core';
import { HomeService } from './../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public currentCategory: string;
  constructor(private homeService: HomeService) {
    this.currentCategory = homeService.currentHomeState;
  }
}

