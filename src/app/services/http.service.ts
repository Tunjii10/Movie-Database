import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { ApiResponse, Movie, MovieDetail, Series, SeriesDetail } from '../model';
@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(private http: HttpClient) {}

    getMovieList(path: string): Observable<ApiResponse<Movie>> {
        let params = new HttpParams().set('api_key', `${env.API_KEY}`).set('language', 'en-US').set('page', 1);
        return this.http.get<ApiResponse<Movie>>(`${env.API_URL}/movie/${path}`, {
            params: params,
        });
    }
    getSeriesList(path: string): Observable<ApiResponse<Series>> {
        let params = new HttpParams().set('api_key', `${env.API_KEY}`).set('language', 'en-US').set('page', 1);
        return this.http.get<ApiResponse<Series>>(`${env.API_URL}/tv/${path}`, {
            params: params,
        });
    }
    searchMovie(searchString: string): Observable<ApiResponse<Movie>> {
        let params = new HttpParams()
            .set('api_key', `${env.API_KEY}`)
            .set('query', searchString)
            .set('language', 'en-US')
            .set('page', 1);
        return this.http.get<ApiResponse<Series>>(`${env.API_URL}/search/movie`, {
            params: params,
        });
    }
    searchSeries(searchString: string): Observable<ApiResponse<Series>> {
        let params = new HttpParams()
            .set('api_key', `${env.API_KEY}`)
            .set('language', 'en-US')
            .set('page', 1)
            .set('query', searchString);
        return this.http.get<ApiResponse<Series>>(`${env.API_URL}/search/tv`, {
            params: params,
        });
    }
    getMovieDetail(id: number): Observable<MovieDetail> {
        let params = new HttpParams().set('api_key', `${env.API_KEY}`).set('language', 'en-US');
        return this.http.get<MovieDetail>(`${env.API_URL}/movie/${id}`, {
            params: params,
        });
    }
    getSeriesDetail(id: number): Observable<SeriesDetail> {
        let params = new HttpParams().set('api_key', `${env.API_KEY}`).set('language', 'en-US');
        return this.http.get<SeriesDetail>(`${env.API_URL}/tv/${id}`, {
            params: params,
        });
    }
}
