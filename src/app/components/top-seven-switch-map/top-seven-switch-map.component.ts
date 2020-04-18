import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/model/person.model';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/model/post.model';
import { share, switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'app-top-seven-switch-map',
    templateUrl: './top-seven-switch-map.component.html',
    styleUrls: ['./top-seven-switch-map.component.scss'],
})
export class TopSevenSwitchMapComponent implements OnInit {
    public readonly title = 'RxJS Switch Map';
    /**
     * Switch Map Operator -- cancels from one observable and switches to another.
     * And it sends the value from the first observable to the second observable.
     */
    source: Observable<Person>;
    result: string;
    loading: boolean;

    constructor(private httpClient: HttpClient) {}

    ngOnInit(): void {
        const postObs = this.getPosts();
        const commentObs = this.getComments();

        const combined = postObs.pipe(
            switchMap(posts => {
                return commentObs
                .pipe(
                    tap(comments => {
                        console.log('comments: ', comments);
                        console.log('posts: ', posts);
                    })
                );
            })
        );
        combined.subscribe();
    }

    getPosts(): Observable<Post[]> {
        return this.httpClient
            .get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    }

    getComments(): Observable<Post[]> {
        return this.httpClient
            .get<Post[]>('https://jsonplaceholder.typicode.com/comments');
    }
}
