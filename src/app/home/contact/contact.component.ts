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

  constructor(private http: Http) {
    this.data = {
      name: '',
      email: '',
      question: ''
    };
  }

  onSubmit(): void {
    this.http.post('https://formspree.io/gms@uchicago.edu', JSON.stringify(this.data))
                    .toPromise()
                    .then(res => {
                      console.log(res.json());
                      this.data = {
                        name: '',
                        email: '',
                        question: ''
                      };
                      this.placeholdern = `George Saieed`;
                      this.placeholderq = `Thanks! :) I'll get back to you ASAP.`;
                    })
                    .catch(err => {
                      console.log(err);
                      this.data = {
                        name: '',
                        email: '',
                        question: ''
                      };
                      this.placeholdern = `George Saieed`;
                      this.placeholderq = `Uh oh. Something went wrong. Try again or email me at gs@georgesaieed.com!`;
                    });
  }
}
