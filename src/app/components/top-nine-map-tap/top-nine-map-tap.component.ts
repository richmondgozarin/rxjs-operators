import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-top-nine-map-tap',
    templateUrl: './top-nine-map-tap.component.html',
    styleUrls: ['./top-nine-map-tap.component.scss'],
})
export class TopNineMapTapComponent implements OnInit {
    public readonly title = 'RxJS map/tap';

    source: Observable<Person>;
    result: string;
    tapResult: Person;

    constructor() {}

    ngOnInit(): void {
        const person: Person = {
            firstname: 'Rich',
        };
        this.source = of(person);

        this.source
            .pipe(map((name) => name.firstname.toUpperCase()))
            .subscribe((data) => {
                this.result = data;
                console.log('map obs data: ', data);
            });

        /** TAP is used to send a signal to a service not manipulating the data */
        this.source
            .pipe(tap((name) => name.firstname.toUpperCase()))
            .subscribe((data) => {
                this.tapResult = data;
                console.log('tap obs data: ', data);
            });
    }

}
