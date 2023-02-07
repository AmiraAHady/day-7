import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, raceWith } from 'rxjs';
import { IMovie } from './movies/IMovie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  apiKey="0ab69d58b9382bc390a939b7dbbe713b"
 

  rate: any = [];

  constructor(private http:HttpClient) {}
  getallMovies(moveLan:string):Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=0ab69d58b9382bc390a939b7dbbe713b&language=${moveLan}&page=1`);
  }

  // getMovieRating(movId: number) {
  //  return this.allMovies.filter((item) => {
  //     if (item.id == movId) {
  //       return item.movie_rating;
  //     }
  //     return 0;
  //   });
  // }

  searchMovies(movieName:string):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=0ab69d58b9382bc390a939b7dbbe713b&language=en-US&page=1&include_adult=false&query=${movieName}`)
  }
}
