import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeSearchInterface } from './home-search-interface';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { ApiResponse, Movie, Series } from 'src/app/model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public PopularMovie: Array<Movie> | undefined;
    public RatedMovie: Array<Movie> | undefined;
    public PopularSeries: Array<Series> | undefined;
    public RatedSeries: Array<Series> | undefined;

    constructor(private router: Router, private httpService: HttpService) {}

    ngOnInit(): void {
        this.movieList('popular');
        this.movieList('top_rated');
        this.seriesList('popular');
        this.seriesList('top_rated');
    }

    model = new HomeSearchInterface(' ');

    submit(form: NgForm) {
        console.log(this.model.searchStr);
    }
    movieList(path: string): void {
        this.httpService.getMovieList(path).subscribe((movieList: ApiResponse<Movie>) => {
            if (path === 'popular') {
                this.PopularMovie = movieList.results;
            } else {
                this.RatedMovie = movieList.results;
            }
        });
    }
    seriesList(path: string): void {
        this.httpService.getSeriesList(path).subscribe((seriesList: ApiResponse<Series>) => {
            if (path === 'popular') {
                this.PopularSeries = seriesList.results;
            } else {
                this.RatedSeries = seriesList.results;
            }
        });
    }
}
