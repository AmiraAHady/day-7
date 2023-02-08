import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {
     tvShows:any[]=[]
  constructor(private tvserv:TvService) { }

  ngOnInit(): void {
    this.tvserv.getTvShows().subscribe({
      next:(tvsData)=>{
         console.log(tvsData);
         this.tvShows=tvsData.results
         
      }
    })
  }

}
