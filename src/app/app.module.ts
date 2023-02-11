import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { StarsComponent } from './stars/stars.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    StarsComponent,
    TvshowsComponent,
    PageNotFoundComponent,
    MoviedetailsComponent,
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
