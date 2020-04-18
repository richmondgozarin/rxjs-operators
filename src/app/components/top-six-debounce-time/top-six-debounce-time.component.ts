import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, map, tap, catchError } from 'rxjs/operators';
import { WikiService } from '../../services/wiki.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from 'src/app/model/post.model';
import { states } from 'src/app/services/states-data.mock';

@Component({
    selector: 'app-top-six-debounce-time',
    templateUrl: './top-six-debounce-time.component.html',
    styleUrls: ['./top-six-debounce-time.component.scss'],
})
export class TopSixDebounceTimeComponent implements OnInit {
    public readonly title = 'RxJS DebounceTime';
    /**
     * DebounceTime Operator -- waits a certain amount of time before emitting the source.
     * DistinctUntilChanged -- wait until have actually changed a keyword.
     */
    WIKI_URL = 'https://en.wikipedia.org/w/api.php';
    PARAMS = new HttpParams({
        fromObject: {
            action: 'opensearch',
            format: 'json',
            origin: '*',
        },
    });

    searchTerm: Observable<string>;
    searching = false;
    searchFailed = false;

    constructor(private wikiService: WikiService, private http: HttpClient) {}

    ngOnInit(): void {}

    searchState = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map((term) =>
                term.length < 2
                    ? []
                    : states
                          .filter(
                              (v) =>
                                  v.toLowerCase().indexOf(term.toLowerCase()) >
                                  -1
                          )
                          .slice(0, 10)
            )
        );

    search = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            tap(() => (this.searching = true)),
            switchMap((term) =>
                this.wikiService.search(term).pipe(
                    tap(() => (this.searchFailed = false)),
                    catchError(() => {
                        this.searchFailed = true;
                        return of([]);
                    })
                )
            ),
            tap(() => (this.searching = false))
        )


    getPosts(searchTerm: string): Observable<Post[]> {
        console.log('getPosts searchTerm', searchTerm);
        return this.http.get<Post[]>(
            'https://jsonplaceholder.typicode.com/posts?q=' + searchTerm
        );
    }
}
