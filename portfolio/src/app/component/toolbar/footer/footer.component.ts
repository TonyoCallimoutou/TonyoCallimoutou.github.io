import { Component } from '@angular/core';
import {Route} from "../route";
import {NgClass, NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {ToolbarComponent} from "../toolbar.component";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgForOf,
    TranslateModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent extends ToolbarComponent {
  override routes: Route[] = [
    {
      name: 'Linkedin',
      route: 'https://www.linkedin.com/in/tonyo-callimoutou/',
      active: false
    },
    {
      name: 'Github',
      route: 'https://github.com/TonyoCallimoutou',
      active: false
    },
  ]

  constructor(
    public override router: Router
  ) {
    super(router);
  }
}
