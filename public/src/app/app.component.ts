import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Pizza';
  current = "home";

  constructor( private _router: Router ) {}

  home() {
    this.current = 'home';
    this._router.navigate(['/']);
  }

  order() {
    this.current = 'order';
    this._router.navigate(['/order']);
  }

  location() {
    this.current = 'location';
    this._router.navigate(['/locations']);
  }

  contact() {
    this.current = 'contact';
    this._router.navigate(['/contacts']);
  }
}
