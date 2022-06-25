import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeSearchInterface } from './home-search-interface';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { ApiResponse, Movie, Series } from 'src/app/model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    public PopularMovie: Array<Movie> | undefined;
    public RatedMovie: Array<Movie> | undefined;
    public PopularSeries: Array<Series> | undefined;
    public RatedSeries: Array<Series> | undefined;
    private seriesSub: Subscription | undefined;
    private moviesSub: Subscription | undefined;

    constructor(private router: Router, private httpService: HttpService) {}

    ngOnInit(): void {
        this.movieList('popular');
        this.movieList('top_rated');
        this.seriesList('popular');
        this.seriesList('top_rated');
    }

    model = new HomeSearchInterface(' ');

    submit(form: NgForm) {
        this.router.navigate(['search', form.value.search]);
    }
    movieList(path: string): void {
        this.moviesSub = this.httpService.getMovieList(path, 1).subscribe((movieList: ApiResponse<Movie>) => {
            if (path === 'popular') {
                this.PopularMovie = movieList.results;
            } else {
                this.RatedMovie = movieList.results;
            }
        });
    }
    seriesList(path: string): void {
        this.seriesSub = this.httpService.getSeriesList(path, 1).subscribe((seriesList: ApiResponse<Series>) => {
            if (path === 'popular') {
                this.PopularSeries = seriesList.results;
            } else {
                this.RatedSeries = seriesList.results;
            }
        });
    }
    openDetails(vidType: string, id?: number): void {
        this.router.navigate(['details', vidType, id]);
    }

    ngOnDestroy(): void {
        if (this.moviesSub) {
            this.moviesSub.unsubscribe();
        }
        if (this.seriesSub) {
            this.seriesSub.unsubscribe();
        }
    }
}
