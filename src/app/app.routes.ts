import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { SignUpPageComponent } from './pages/auth/sign-up-page/sign-up-page.component';
import { DashboardPagesComponent } from './pages/dashboard/dashboard-pages/dashboard-pages.component';

export const routes: Routes = [
    { path: 'homePage', component: HomePageComponent },
    { path: 'aboutPage', component: AboutPageComponent },
    { path: 'loginPage', component: LoginPageComponent },
    { path: 'SignPage', component: SignUpPageComponent },
    { path: 'DashboardPage', component: DashboardPagesComponent },
    { path: '', redirectTo: 'homePage', pathMatch: 'full' },
];
