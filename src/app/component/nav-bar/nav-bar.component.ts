import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavSearchInterface } from './nav-search-interface';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    Toggle() {
        const element = document.getElementById('mobile-menu-3') as HTMLInputElement | null;
        if (element) {
            element.classList.toggle('hidden');
        }
    }

    model = new NavSearchInterface(' ');

    searchFunction($event: KeyboardEvent, form: NgForm) {
        if ($event.key === 'Enter') {
            console.log('yes');
            console.log(form.value.search);
            console.log(this.model.searchStr);
            this.router.navigate(['search', form.value.search]);
        }
    }
}
