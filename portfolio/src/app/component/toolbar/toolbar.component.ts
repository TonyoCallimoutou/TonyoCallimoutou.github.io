import {Component, HostListener, OnInit} from '@angular/core';
import {Route} from "./route";
import {NgClass, NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    NgForOf,
    TranslateModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {
  routes : Route[] = [
    {
      name: 'Links.home',
      route: '/',
      active: false
    },
    {
      name: 'Links.about',
      route: '/about',
      active: false
    },
    {
      name: 'Links.projects',
      route: '/project',
      active: false
    },
  ]

  constructor(
    public router: Router
  ) {
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routes.forEach(route => {
          if (route.route === event.url) {
            route.active = true;
          }
          else {
            route.active = false;
          }
        });
      }
    });
  }

}
