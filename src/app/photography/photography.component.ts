import { Component } from '@angular/core';
import { HomeService } from './../services/home.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-photographyproj',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyProjComponent {

  public currProj: string;
  public titleProj: string;

  constructor(private location: Location, private router: Router, private homeService: HomeService, private route: ActivatedRoute) {
    router.events.subscribe((val) => {
        window.scrollTo(0, 0);
        this.currProj = location.path().slice(13, 14).toUpperCase() + location.path().slice(14);
        this.titleProj = this.currProj;
        if (this.currProj === 'Mru') {
          this.titleProj = 'University Cup';
        }
        if (this.currProj === 'Engagement') {
          this.titleProj = 'D & MM\'s Engagement';
        }
        if (this.currProj === 'Newyork') {
          this.titleProj = 'New York City';
        }
        if (this.currProj === 'Niagara') {
          this.titleProj = 'Niagara Falls';
        }
    });
  }

  public returnHome(): void {
    this.router.navigate(['home', this.homeService.currentHomeState]);
  }

  // node node_modules/angular2-image-gallery/convert.js src/assets/img/photography/spain/photos --gName=spain
}

