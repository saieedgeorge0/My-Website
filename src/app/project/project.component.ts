import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from './../services/home.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
<<<<<<< HEAD
import { starter, hatsopolous, uh2k19, neuro, um2k18, chrome, acacouncil,
  hhhack, hhmake, hhlanding, rfc, hh, stmcoc, uofc, uncommon, calc, old, acn, fb, pres, aig, uw, ig, poly } from './project.info';
=======
import { hhhack, hhmake, hhlanding, rfc, hh, stmcoc, uofc, uncommon, calc, old, acn, fb, pres, aig, uw, ig, poly } from './project.info';
>>>>>>> 1555983b0f8cd99d9217339c5ea7fc5492c1a840

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public currProj: string;

  constructor(private location: Location, private router: Router, private homeService: HomeService, private route: ActivatedRoute) {
    router.events.subscribe((val) => {
        window.scrollTo(0, 0);
        this.currProj = location.path().slice(9);
    });
  }

<<<<<<< HEAD
  public dev = ['starter', 'hatsopolous', 'uh2k19', 'neuro', 'um2k18', 'chrome',
  'acacouncil', 'hhhack', 'hhmake', 'hhlanding', 'rfc', 'hh', 'stmcoc', 'uofc', 'uncommon', 'calc', 'old'];
=======
  public dev = ['hhhack', 'hhmake', 'hhlanding', 'rfc', 'hh', 'stmcoc', 'uofc', 'uncommon', 'calc', 'old'];
>>>>>>> 1555983b0f8cd99d9217339c5ea7fc5492c1a840
  public des = ['acn', 'fb', 'pres', 'aig', 'uw', 'ig', 'poly'];
  public fwdProj = '';
  public backProj = '';

  public type: string;
  public number: string;
  public client: string;
  public description: string;
  public link: string;
  public downloads: string;
  public clickL = `Click here`;
  public clickD = `Click here`;
  public color: string;
  public winner: string;
  public images: string[] = [];

<<<<<<< HEAD
  public projects = { starter, hatsopolous, uh2k19, neuro, um2k18, chrome, acacouncil, hhhack, hhmake,
    hhlanding, rfc, hh, stmcoc, uofc, uncommon, calc, old, acn, fb, pres, aig, uw, ig, poly };
=======
  public projects = { hhhack, hhmake, hhlanding, rfc, hh, stmcoc, uofc, uncommon, calc, old, acn, fb, pres, aig, uw, ig, poly };
>>>>>>> 1555983b0f8cd99d9217339c5ea7fc5492c1a840

  ngOnInit(): void {
    if (this.dev.indexOf(this.currProj) >= 0 || this.des.indexOf(this.currProj) >= 0) {
    } else { this.currProj = 'rfc'; }

    this.type = this.projects[`${this.currProj}`][0];
    this.number = this.projects[`${this.currProj}`][1];
    this.client = this.projects[`${this.currProj}`][2];
    this.description = this.projects[`${this.currProj}`][3];
    this.link = this.projects[`${this.currProj}`][4];
    this.downloads = this.projects[`${this.currProj}`][5];
    this.color = this.projects[`${this.currProj}`][6];
    this.winner = this.projects[`${this.currProj}`][7];

    console.log(this.projects[`${this.currProj}`][8]);

    for (let i = 8; i < this.projects[`${this.currProj}`].length; i++) {
      this.images.push(this.projects[`${this.currProj}`][i]);
    }

    if (this.link === ``) {
      this.clickL = ``;
    }

    if (this.downloads === ``) {
      this.clickD = ``;
    }
  }

  public returnHome(): void {
    this.router.navigate(['home', this.homeService.currentHomeState]);
  }

  public fwd(projNumber: string): void {
    if (this.type === 'development') {
      if (projNumber === this.dev.length.toString()) {
        projNumber = '0';
      }
      this.fwdProj = this.dev[projNumber];
    }
    if (this.type === 'design') {
      if (projNumber === this.des.length.toString()) {
        projNumber = '0';
      }
      this.fwdProj = this.des[projNumber];
    }
    if (this.router.navigated === false) {
      // Case when route was not used yet
      this.router.navigateByUrl(`/project/${this.fwdProj}`);
    } else {
      // Case when route was used once or more
      this.router.navigateByUrl(`/home`).then(
        () => {
          this.router.navigateByUrl(`/project/${this.fwdProj}`);
        });
    }
  }

  public back(projNumber: string): void {
    if (this.type === 'development') {
      if (projNumber === '1') {
        projNumber = (this.dev.length + 1).toString();
      }
      this.backProj = this.dev[+projNumber - 2];
    }
    if (this.type === 'design') {
      if (projNumber === '1') {
        projNumber = (this.des.length + 1).toString();
      }
      this.backProj = this.des[+projNumber - 2];
    }
    if (this.router.navigated === false) {
      // Case when route was not used yet
      this.router.navigateByUrl(`/project/${this.backProj}`);
    } else {
      // Case when route was used once or more
      this.router.navigateByUrl(`/home`).then(
        () => {
          this.router.navigateByUrl(`/project/${this.backProj}`);
        });
    }
  }
}

