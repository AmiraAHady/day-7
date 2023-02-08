import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
 
  constructor(private movsService:MoviesService,private route:ActivatedRoute) { }
  myMovie:any={}
  ngOnInit(): void {
  let  id=this.route.snapshot.paramMap.get('id');
    this.movsService.getMovieById(id).subscribe({next:(movieData)=>{
      this.myMovie=movieData
    }})
  }

}
