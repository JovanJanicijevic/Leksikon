import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);