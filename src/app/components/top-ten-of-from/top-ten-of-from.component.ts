import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { Observable, of, from } from 'rxjs';

@Component({
    selector: 'app-top-ten-of-from',
    templateUrl: './top-ten-of-from.component.html',
    styleUrls: ['./top-ten-of-from.component.scss'],
})
export class TopTenOfFromComponent implements OnInit {
    public readonly title = 'RxJS Of/From';

    person: Person = {
        firstname: 'Rich',
    };

    personObs1: Observable<Person>;
    personObs2: Observable<Person>;

    constructor() {}

    ngOnInit(): void {
        this.personObs1 = of(this.person);

        this.personObs1.subscribe((data) => console.log('obs data: ', data));
        this.promiseToObs();
    }

    promiseToObs() {
        const personPromise: Promise<Person> = Promise.resolve(this.person);
        this.personObs2 = from(personPromise);

        this.personObs2.subscribe((data) => console.log('promiseToObs: ', data));
    }
}
