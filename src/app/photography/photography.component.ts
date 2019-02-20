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
  public thisProj: string;

  constructor(private location: Location, private router: Router, private homeService: HomeService, private route: ActivatedRoute) {
    router.events.subscribe((val) => {
        window.scrollTo(0, 0);
        this.currProj = location.path().slice(13, 14).toUpperCase() + location.path().slice(14);
        this.thisProj = this.currProj;
        if (this.thisProj === 'Mru') {
          this.thisProj = 'University Cup';
        }
        if (this.thisProj === 'Newyork') {
          this.thisProj = 'New York City';
        }
        if (this.thisProj === 'Engagement') {
          this.thisProj = 'D & MM\'s Engagement';
        }
        if (this.thisProj === 'Niagara') {
          this.thisProj = 'Niagara Falls';
        }
    });
  }

  public returnHome(): void {
    this.router.navigate(['home', this.homeService.currentHomeState]);
  }

  // node node_modules/angular2-image-gallery/convert.js src/assets/img/photography/spain/photos --gName=spain
}

