import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieDetail, SeriesDetail } from 'src/app/model';
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
    id: number = 0;
    gameType: string = '';
    detailSubscriber: Subscription | undefined;
    detailRouteSubscriber: Subscription | undefined;
    detailMovie: MovieDetail | undefined;
    detailSeries: SeriesDetail | undefined;

    constructor(private ActivatedRoute: ActivatedRoute, private httpService: HttpService) {}

    ngOnInit(): void {
        this.detailRouteSubscriber = this.ActivatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
            this.gameType = params['vidType'];
            this.loadDetail(this.gameType, this.id);
        });
    }

    loadDetail(gameType: string, id: number): void {
        this.detailSubscriber = this.httpService.getDetail(gameType, id).subscribe((detailResponse: any) => {
            if (gameType === 'movie') {
                this.detailMovie = detailResponse;
            } else {
                this.detailSeries = detailResponse;
            }
        });
    }

    ngOnDestroy(): void {
        if (this.detailSubscriber) {
            this.detailSubscriber.unsubscribe();
        }
        if (this.detailRouteSubscriber) {
            this.detailRouteSubscriber.unsubscribe();
        }
    }
}
