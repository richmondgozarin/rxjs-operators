import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { Color, Driver, Car } from 'src/app/model/car.model';

@Component({
    selector: 'app-top-three-merge-map',
    templateUrl: './top-three-merge-map.component.html',
    styleUrls: ['./top-three-merge-map.component.scss'],
})
export class TopThreeMergeMapComponent implements OnInit {
    title = 'RxJS Merge Map/Flat Map';
    /**
     * MergeMap - gives the value of the first observable.
     */
    constructor() {}

    ngOnInit(): void {
        const carColorObs: Observable<Color> = this.getColor();
        const carDriverObs: Observable<Driver> = this.getDriver();

        const carObs: Observable<Car> = carColorObs.pipe(
            mergeMap((color) => {
                return carDriverObs.pipe(
                    map((driver) => {
                        const car: Car = {
                            driver,
                            color,
                        };
                        return car;
                    })
                );
            })
        );
        carObs.subscribe(data => console.log(data));
    }


    getColor(): Observable<Color> {
        return of({ color: 'blue' });
    }

    getDriver(): Observable<Driver> {
        return of({ driver: 'Rich' });
    }
}
