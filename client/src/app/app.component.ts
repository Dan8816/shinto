import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'public';
  weather: any

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
  }
  goHome() {
    this._router.navigate(['/']);
  }
}
