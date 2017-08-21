import { Component } from '@angular/core';
import { HomeService } from './../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  constructor(private router: Router, private homeService: HomeService) {}

  public returnHome(): void {
    this.router.navigate(['home', this.homeService.currentHomeState]);
  }
}

