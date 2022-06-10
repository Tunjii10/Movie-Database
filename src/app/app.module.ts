import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

@NgModule({
    declarations: [AppComponent, NavBarComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatFormFieldModule,
        MatIconModule,
        MatTabsModule,
        MatSliderModule,
        MatSelectModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
