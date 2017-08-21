import { Component, OnInit } from '@angular/core';
import { HomeService } from './../services/home.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public ngOnInit(): void {
      window.location.href = 'https://medium.com/george-saieed';
  }
}

