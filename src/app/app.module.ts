import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { DevelopmentComponent } from './home/development/development.component';
import { DesignComponent } from './home/design/design.component';
import { PhotographyComponent } from './home/photography/photography.component';
import { PhotographyProjComponent } from './photography/photography.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { BlogComponent } from './blog/blog.component';

import { AppComponent } from './app.component';

import { HomeService } from './services/home.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DevelopmentComponent,
    DesignComponent,
    PhotographyComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
    PhotographyProjComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    Angular2ImageGalleryModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home/development',
        pathMatch: 'full'
      },
      {
        path: 'home',
        redirectTo: '/home/development',
        pathMatch: 'full'
      },
      {
        path: 'project',
        redirectTo: '/project/rfc',
        pathMatch: 'full'
      },
      {
        path: 'photography',
        redirectTo: '/photography/spain',
        pathMatch: 'full'
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'home/development',
        component: DevelopmentComponent
      },
      {
        path: 'home/design',
        component: DesignComponent
      },
      {
        path: 'home/photography',
        component: PhotographyComponent
      },
      {
        path: 'home/about',
        component: AboutComponent
      },
      {
        path: 'home/contact',
        component: ContactComponent
      },
      {
        path: 'project',
        component: ProjectComponent
      },
      {
        path: 'project/:name',
        component: ProjectComponent
      },
      {
        path: 'photography',
        component: PhotographyProjComponent
      },
      {
        path: 'photography/:name',
        component: PhotographyProjComponent
      },
      {
        path: '**',
        redirectTo: '/home/development'
      }
    ])
  ],
  providers: [
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
