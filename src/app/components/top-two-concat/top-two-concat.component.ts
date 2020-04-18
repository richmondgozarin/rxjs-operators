import { Component, OnInit } from '@angular/core';
import { Observable, of, concat } from 'rxjs';
import { Color, Driver, Car } from 'src/app/model/car.model';
import { mergeMap, map } from 'rxjs/operators';

@Component({
    selector: 'app-top-two-concat',
    templateUrl: './top-two-concat.component.html',
    styleUrls: ['./top-two-concat.component.scss'],
})
export class TopTwoConcatComponent implements OnInit {
    title = 'RxJS Concat';
    /**
     * Concat - pass in all the observables that you want to concatinate together.
     * Keep in mind it will emit in order.
     * Keep in mind it will emit twice.
     */
    constructor() {}

    ngOnInit(): void {
        const carColorObs: Observable<Color> = this.getColor();
        const carDriverObs: Observable<Driver> = this.getDriver();

        const combined$ = concat(carColorObs, carDriverObs);
        combined$.subscribe(data => console.log(data));
    }

    getColor(): Observable<Color> {
        return of({ color: 'blue' });
    }

    getDriver(): Observable<Driver> {
        return of({ driver: 'Rich' });
    }
}
