import { Component } from '@angular/core';

@Component({//decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-tour-of-heroes';


  getAppName():string{
    return this.title;
  }
}
