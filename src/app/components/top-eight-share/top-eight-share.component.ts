import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from 'src/app/model/person.model';
import { map, tap, share } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/model/post.model';

@Component({
    selector: 'app-top-eight-share',
    templateUrl: './top-eight-share.component.html',
    styleUrls: ['./top-eight-share.component.scss'],
})
export class TopEightShareComponent implements OnInit {
    public readonly title = 'RxJS Share';

    source: Observable<Person>;
    result: string;
    loading: boolean;

    constructor(private httpClient: HttpClient) {}

    ngOnInit(): void {
        const request = this.getPosts();
        this.setLoadingSpinner(request);

        request.subscribe(data => {
            console.log(data);
        });
    }

    setLoadingSpinner(observable: Observable<any>) {
        this.loading = true;
        observable.subscribe(() => (this.loading = false));
    }

    /**
     * Share Operator will share the result to its subscriber.
     * Subscribing to it multiple times will not fire multiple http request.
     */
    getPosts(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(
            'https://jsonplaceholder.typicode.com/posts'
        )
        .pipe(share());
    }
}
