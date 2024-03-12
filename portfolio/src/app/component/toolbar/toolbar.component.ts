import { Component } from '@angular/core';
import {Route} from "./route";
import {NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    NgForOf,
    TranslateModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  routes : Route[];

  constructor(private router: Router) {
    this.routes = [
      {name: 'Links.home', route: '/'},
      {name: 'Links.about', route: '/about'},
      {name: 'Links.projects', route: '/project'}
    ];
  }

  goTo(route: Route): void {
    this.router.navigate([route.route])
      .then(r => console.log('Go to ' + route.route));
  }

}
