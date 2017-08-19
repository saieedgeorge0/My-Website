import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.css']
})
export class DevelopmentComponent {
  constructor(private router: Router) {}

  public openProject(project: string): void {
    this.router.navigate(['project', project]);
  }
}
