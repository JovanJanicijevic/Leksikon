import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([]),routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
