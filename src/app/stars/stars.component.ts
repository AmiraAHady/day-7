import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
})
export class StarsComponent implements OnInit, OnChanges {
  @Input()
  rating!: number;
   @Input()
  movieId!: number;
  clipWidth: number = 75;
  serviceData:any=0;

  // secondObjecy:MoviesService=new MoviesService()

  @Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>()
  constructor( private moviesser:MoviesService) {}

  ngOnInit(): void {
    // this.secondObjecy.sayhello()
    // this.moviesser.sayhello()
  }

  ngOnChanges(): void {
  //  this.serviceData= this.moviesser.getMovieRating(this.movieId)
  //  console.log(this.serviceData[0].movie_rating);
   
    this.clipWidth = (this.serviceData[0].movie_rating * 75) / 10;
  }

  onRatedCliked(){
    this.ratingClicked.emit(`i am cliked with rating ${this.rating} `)
  }
}
