import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public data = {name: ``, email: ``, question: ``};
  public placeholdern = `enter here`;
  public placeholdere = `enter here`;
  public placeholderq = `enter here`;
  private header = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});

  constructor(private http: Http) {
    this.data = {
      name: '',
      email: '',
      question: ''
    };
  }

  onSubmit(): void {
    console.log(this.data);
    this.http.post('https://formspree.io/saieed.george0@gmail.com', JSON.stringify(this.data), {headers: this.header})
              .toPromise()
              .then(res => {
                console.log(res.json());
                this.placeholdern = `George Saieed`;
                this.placeholderq = `Thanks! :) I'll get back to you ASAP.`;
              })
              .catch(err => {
                console.log(err);
                this.placeholdern = `George Saieed`;
                this.placeholderq = `Uh oh. Something went wrong. Try again or email me at gs@georgesaieed.com!`;
                    });
    this.data = {
      name: '',
      email: '',
      question: ''
    };
  }
}
