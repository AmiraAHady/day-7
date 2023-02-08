import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { IMovie } from './IMovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  childMessage: string = '';
  websiteLang: string = 'en-US';
  pageNumber: number = 1;
  //  myobject:MoviesService=new MoviesService()
  allMovies: IMovie[] = [];
  filterdMovies: IMovie[] = [];
  private _searchFilter: string = '';

  get searchValue(): string {
    return this._searchFilter;
  }

  set searchValue(data: string) {
    this._searchFilter = data;
    // this.filterdMovies = this.searchMovies(data);
    this.movsService.searchMovies(data).subscribe({
      next: (searchData) => {
        // console.log(searchData.results);
        this.filterdMovies = searchData.results;
      },
    });
  }
  constructor(private movsService: MoviesService) {
    console.log('inside constructor');
  }

  ngOnInit(): void {
    // console.log('inside ngOninit');

    // this.myobject.sayhello()
    // this.movsService.sayhello()

    this.movsService.getallMovies(this.websiteLang, this.pageNumber).subscribe({
      next: (moviesdata) => {
        console.log(moviesdata.results);
        this.allMovies = moviesdata.results;
        this.filterdMovies = this.allMovies;
      },
    });
    // this.filterdMovies=this.allMovies;
  }

  getMovieTitle() {
    // alert(`you clicked ${this.myMovie.title}`);
    // console.log(`you clicked ${this.myMovie.title}`)
  }

  toogleDiscription(movieId: number): void {
    this.allMovies.forEach(function (item) {
      if (item.id == movieId) {
        item.show = !item.show;
      }
    });
  }

  searchMovies(val: string) {
    return this.allMovies.filter(function (item) {
      return item.title.toLocaleLowerCase().includes(val.toLocaleLowerCase());
    });
  }

  acceptChildMessage(msg: string) {
    this.childMessage = msg;
  }

  changeLang() {
    this.websiteLang = this.websiteLang == 'en-US' ? 'ar-SA' : 'en-US';
    this.callMovieList()
  }

  goNext() {
    ++this.pageNumber;
    this.callMovieList()
  }
  goPrev() {
    if (this.pageNumber > 1) {
      --this.pageNumber;
      this.callMovieList()
    }
  }

  callMovieList(){
    this.movsService
    .getallMovies(this.websiteLang, this.pageNumber)
    .subscribe({
      next: (moviesdata) => {
        console.log(moviesdata.results);
        this.allMovies = moviesdata.results;
        this.filterdMovies = this.allMovies;
      },
    });
  }
}
