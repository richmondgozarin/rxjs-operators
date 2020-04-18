import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class WikiService {
    WIKI_URL = 'https://en.wikipedia.org/w/api.php';
    PARAMS = new HttpParams({
        fromObject: {
            action: 'opensearch',
            format: 'json',
            origin: '*',
        },
    });
    constructor(private http: HttpClient) {}

    search(term: string) {
        if (!term) {
            return of([]);
        }
        return this.http
            .get(this.WIKI_URL, { params: this.PARAMS.set('search', term) })
            .pipe(map((response) => response[1]));
    }
}
