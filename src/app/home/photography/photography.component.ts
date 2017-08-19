import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent {
  constructor(private router: Router) {}

  public openProject(project: string): void {
    this.router.navigate(['photography', project]);
  }
}
