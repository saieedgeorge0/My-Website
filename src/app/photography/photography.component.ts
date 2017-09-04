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

  constructor(private location: Location, private router: Router, private homeService: HomeService, private route: ActivatedRoute) {
    router.events.subscribe((val) => {
        window.scrollTo(0, 0);
        this.currProj = location.path().slice(13);
    });
  }

  public returnHome(): void {
    this.router.navigate(['home', this.homeService.currentHomeState]);
  }
}

