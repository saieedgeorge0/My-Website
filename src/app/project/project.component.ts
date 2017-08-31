import { Component, OnInit } from '@angular/core';
import { HomeService } from './../services/home.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { rfc, hh, stmcoc, uofc, uncommon, calc, old, fb, pres, aig, uw, ig, poly } from './project.info';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public currProj: string;

  constructor(private location: Location, private router: Router, private homeService: HomeService) {
    router.events.subscribe((val) => {
        window.scrollTo(0, 0);
        this.currProj = location.path().slice(9);
    });
  }

  public type: string;
  public number: string;
  public client: string;
  public description: string;
  public link: string;
  public downloads: string;
  public color: string;
  public winner: string;

  public projects = { rfc, hh, stmcoc, uofc, uncommon, calc, old, fb, pres, aig, uw, ig, poly };

  ngOnInit(): void {
    this.type = this.projects[`${this.currProj}`][0];
    this.number = this.projects[`${this.currProj}`][1];
    this.client = this.projects[`${this.currProj}`][2];
    this.description = this.projects[`${this.currProj}`][3];
    this.link = this.projects[`${this.currProj}`][4];
    this.downloads = this.projects[`${this.currProj}`][5];
    this.color = this.projects[`${this.currProj}`][6];
    this.winner = this.projects[`${this.currProj}`][7];
  }

  public returnHome(): void {
    this.router.navigate(['home', this.homeService.currentHomeState]);
  }
}

