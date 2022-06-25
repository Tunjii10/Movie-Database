import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './component/details/details.component';
import { HomeComponent } from './component/home/home.component';
import { ListviewComponent } from './component/listview/listview.component';
import { SearchComponent } from './component/search/search.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'details/:vidType/:id',
        component: DetailsComponent,
    },
    {
        path: 'search/:searchTerm',
        component: SearchComponent,
    },
    {
        path: 'list/:vidType',
        component: ListviewComponent,
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
