import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    Toggle() {
        const element = document.getElementById('mobile-menu-3') as HTMLInputElement | null;
        if (element) {
            element.classList.toggle('hidden');
        }
    }
}
