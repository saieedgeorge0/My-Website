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

  constructor(private homeService: HomeService, location: Location, public router: Router) {
    router.events.subscribe((val) => {
        window.scrollTo(0, 0);
        console.log(location.path());
        this.currentCategory = 'development';
        for (let i = 0; i < this.possibleCategories.length; i++) {
          if (this.possibleCategories[i] === location.path().slice(6)) {
            this.currentCategory = location.path().slice(6);
          }
        }

        if (location.path().slice(1, 8) === 'project' || location.path().slice(1, 5) === 'blog') {
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

  public changeCategory(category) {
    this.currentCategory = category;
    this.homeService.setHomeState(category);
  }

  public toBlog(): void {
    window.location.href = 'https://medium.com/george-saieed';
  }
}

