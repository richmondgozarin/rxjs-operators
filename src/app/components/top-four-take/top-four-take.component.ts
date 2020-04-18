import { Component, OnInit } from '@angular/core';
import { fromEvent, of, Subject } from 'rxjs';
import { take, takeWhile, takeLast, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-top-four-take',
  templateUrl: './top-four-take.component.html',
  styleUrls: ['./top-four-take.component.scss']
})
export class TopFourTakeComponent implements OnInit {
    title = 'RxJS Take Operator';
    onStop$ = new Subject<void>();

    constructor() { }

    ngOnInit(): void {
        let counter = 0;
        const source = fromEvent(document, 'click');
        source
        // .pipe(take(1))
        .pipe(takeWhile(() => counter < 3))
        .subscribe(() => {
            console.log('Clicked on document! ' + counter);
            counter++;
        });

        this.takeLastUntil();
    }

    takeLastUntil() {
        const source = fromEvent(document, 'click');
        source
            // .pipe(takeLast(2))
            .pipe(takeUntil(this.onStop$))
            .subscribe((value) => {
                // console.log('takeLast Clicked on document! ' + value);
                console.log('takeUntil Clicked on document! ' + value);
            });
    }

    stop() {
        this.onStop$.next();
        this.onStop$.complete();
    }

}
