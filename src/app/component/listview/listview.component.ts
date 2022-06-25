import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { forkJoin, Subscription, map } from 'rxjs';
import { Movie, Series } from 'src/app/model';
import { HttpService } from 'src/app/services/http.service';
@Component({
    selector: 'app-listview',
    templateUrl: './listview.component.html',
    styleUrls: ['./listview.component.scss'],
})
export class ListviewComponent implements OnInit {
    private listViewRouteSubscriber: Subscription | undefined;
    private popularMovieSubscriber: Subscription | undefined;
    private popularSeriesSubscriber: Subscription | undefined;
    public popularSeries: Array<Series> | undefined;
    public popularMovie: Array<Movie> | undefined;
    public vidType: string = '';
    constructor(private ActivatedRoute: ActivatedRoute, private httpService: HttpService) {}

    ngOnInit(): void {
        this.listViewRouteSubscriber = this.ActivatedRoute.params.subscribe((params: Params) => {
            this.vidType = params['vidType'];
            this.loadList(this.vidType);
        });
    }
    loadList(vidType: string): void {
        if (vidType === 'movies') {
            this.popularMovieSubscriber = forkJoin({
                first: this.httpService.getMovieList('popular', 1),
                second: this.httpService.getMovieList('popular', 2),
                third: this.httpService.getMovieList('popular', 3),
            })
                .pipe(
                    map((result: any) => {
                        return { arr: [...result.first.results, ...result.second.results, ...result.third.results] };
                    })
                )
                .subscribe((response: any) => {
                    this.popularMovie = response.arr;
                });
        } else {
            this.popularSeriesSubscriber = forkJoin({
                first: this.httpService.getSeriesList('popular', 1),
                second: this.httpService.getSeriesList('popular', 2),
                third: this.httpService.getSeriesList('popular', 3),
            })
                .pipe(
                    map((result: any) => {
                        return { arr: [...result.first.results, ...result.second.results, ...result.third.results] };
                    })
                )
                .subscribe((response: any) => {
                    this.popularSeries = response.arr;
                });
        }
    }

    ngOnDestroy(): void {
        if (this.popularMovieSubscriber) {
            this.popularMovieSubscriber.unsubscribe();
        }
        if (this.popularSeriesSubscriber) {
            this.popularSeriesSubscriber.unsubscribe();
        }
        if (this.listViewRouteSubscriber) {
            this.listViewRouteSubscriber.unsubscribe();
        }
    }
}
