import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
    public toBlog(): void {
      window.location.href = 'https://medium.com/george-saieed';
    }
}
