import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

const routes: Routes = [
  //localhost:4200/movieDetails/7544
  
  {path:'movies',component:MoviesComponent},
  {path:'tvs',component:TvshowsComponent},
  {path:'products',component:ProductsComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  {path:'movieDetails/:id',component:MoviedetailsComponent},
  {path:'',component:MoviesComponent},
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
