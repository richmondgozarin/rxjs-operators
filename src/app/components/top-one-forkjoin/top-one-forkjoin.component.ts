import { Component, OnInit } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { Color, Driver } from 'src/app/model/car.model';
import { Post } from 'src/app/model/post.model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-top-one-forkjoin',
    templateUrl: './top-one-forkjoin.component.html',
    styleUrls: ['./top-one-forkjoin.component.scss'],
})
export class TopOneForkjoinComponent implements OnInit {
    title = 'RxJS ForkJoin Operator';
    /**
     * ForkJoin - Will emit in an array fashion.
     */
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        const posts$: Observable<Post[]> = this.getPosts();
        const comments$: Observable<any> = this.getComments();

        const combined$ = forkJoin(posts$, comments$);
        combined$.subscribe((data) => console.log(data));
    }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(
            'https://jsonplaceholder.typicode.com/posts'
        );
    }

    getComments(): Observable<any[]> {
        return this.http.get<any[]>(
            'https://jsonplaceholder.typicode.com/comments'
        );
    }
}
