import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeSearchInterface } from './home-search-interface';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    model = new HomeSearchInterface(' ');

    submit(form: NgForm) {
        console.log(this.model.searchStr);
    }
}
