import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent {
  constructor(private router: Router) {}

  public openProject(project: string): void {
    this.router.navigate(['project', project]);
  }
}
