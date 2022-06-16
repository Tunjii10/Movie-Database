import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeSearchInterface } from './home-search-interface';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { ApiResponse, Movie } from 'src/app/model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public PopularMovie: ApiResponse<Movie> | undefined;

    constructor(private router: Router, private httpService: HttpService) {}

    ngOnInit(): void {
        this.movieList('popular');
    }

    model = new HomeSearchInterface(' ');

    submit(form: NgForm) {
        console.log(this.model.searchStr);
    }
    movieList(path: string): void {
        this.httpService.getMovieList(path).subscribe((movieList: ApiResponse<Movie>) => {
            console.log(movieList);
        });
    }
}
