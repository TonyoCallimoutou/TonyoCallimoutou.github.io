import { Component } from '@angular/core';
import {Route} from "../toolbar/route";
import {NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgForOf,
    TranslateModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerLinks : Route[];

  constructor() {
    this.footerLinks = [
      {
        name: 'Linkedin',
        route: 'https://www.linkedin.com/in/alexander-pan-1b0a8b1a8/'
      },
      {
        name: 'Github',
        route: 'github.com/alexanderpan'
      },
    ];
  }

}
