import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiResponse, Movie, Series } from 'src/app/model';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
    private searchRouteSubscriber: Subscription | undefined;
    private searchSeriesSubscriber: Subscription | undefined;
    private searchMovieSubscriber: Subscription | undefined;
    public searchSeries: Array<Series> | undefined;
    public searchMovie: Array<Movie> | undefined;
    public searchStr: string = '';
    constructor(private ActivatedRoute: ActivatedRoute, private httpService: HttpService) {}

    ngOnInit(): void {
        this.searchRouteSubscriber = this.ActivatedRoute.params.subscribe((params: Params) => {
            this.searchStr = params['searchTerm'];
            this.loadSearchResult(this.searchStr);
        });
    }
    loadSearchResult(searchStr: string): void {
        this.searchStr = searchStr;
        this.searchSeriesSubscriber = this.httpService
            .searchSeries(searchStr)
            .subscribe((response: ApiResponse<Series>) => {
                this.searchSeries = response.results;
            });
        this.searchMovieSubscriber = this.httpService
            .searchMovie(searchStr)
            .subscribe((response: ApiResponse<Movie>) => {
                this.searchMovie = response.results;
            });
    }

    ngOnDestroy(): void {
        if (this.searchMovieSubscriber) {
            this.searchMovieSubscriber.unsubscribe();
        }
        if (this.searchSeriesSubscriber) {
            this.searchSeriesSubscriber.unsubscribe();
        }
        if (this.searchRouteSubscriber) {
            this.searchRouteSubscriber.unsubscribe();
        }
    }
}
