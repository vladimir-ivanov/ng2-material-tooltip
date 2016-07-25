import {provideRouter, RouterConfig} from '@angular/router';
import {HomePageComponent} from "./home/home-page-component.ts";



const routes: RouterConfig = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: "home", component: HomePageComponent},
];

export const appRouterProviders = [
    provideRouter(routes)
];