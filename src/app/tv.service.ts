import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  apiKey="0ab69d58b9382bc390a939b7dbbe713b"
  constructor(private http:HttpClient) { }

  getTvShows():Observable<any>{
     return this.http.get(`
     https://api.themoviedb.org/3/tv/popular?api_key=0ab69d58b9382bc390a939b7dbbe713b&language=en-US&page=1`)
  }
}
