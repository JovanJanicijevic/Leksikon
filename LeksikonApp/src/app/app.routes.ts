import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', component: PageNotFoundComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);