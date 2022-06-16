import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { ApiResponse, Movie } from '../model';
@Injectable({
    providedIn: 'root',
})
export class HttpService {
    constructor(private http: HttpClient) {}

    getMovieList(path: string): Observable<ApiResponse<Movie>> {
        let params = new HttpParams().set('api_key', `${env.API_KEY}`).set('language', 'en-US').set('page', 1);
        return this.http.get<ApiResponse<Movie>>(`${env.BASE_URL}/movie/${path}`, {
            params: params,
        });
    }
}
