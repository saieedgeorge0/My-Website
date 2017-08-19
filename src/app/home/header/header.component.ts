import { Component } from '@angular/core';
import { HomeService } from './../../services/home.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public currentCategory;
  public project;
  public photography;
  public possibleCategories = ['development', 'design', 'photography', 'about', 'contact'];

  constructor(private homeService: HomeService, location: Location, router: Router) {
    router.events.subscribe((val) => {
        this.currentCategory = 'development';
        for (let i = 0; i < this.possibleCategories.length; i++) {
          if (this.possibleCategories[i] === location.path().slice(6)) {
            this.currentCategory = location.path().slice(6);
          }
        }

        if (location.path().slice(1, 8) === 'project') {
          this.project = true;
        } else {
          this.project = false;
        }

        if (location.path().slice(1, 12) === 'photography') {
          this.photography = true;
        } else {
          this.photography = false;
        }
    });
  }

  private changeCategory(category) {
    this.currentCategory = category;
    this.homeService.setHomeState(category);
  }
}

