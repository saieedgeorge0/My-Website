import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HomeService {
    public currentHomeState = 'development';
    public currentHomeStateChange: Subject<string> = new Subject<string>();

    constructor() {
        this.currentHomeStateChange.subscribe((value) => {
            this.currentHomeState = value;
        });
    }

    setHomeState(state: string): void {
        this.currentHomeStateChange.next(state);
    }
}
