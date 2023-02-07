import { Component } from '@angular/core';

@Component({
  //decorator
  selector: 'app-home', //component directive
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  websiteTitle: string = 'Netflix';
  yourName:string='ali'
  data:string='data'
  avaliabe:boolean=true;
  myarr=[
    'hello',
    'welcome',
    'hi',
    'kjhk'
  ]
  constructor() {}
}
