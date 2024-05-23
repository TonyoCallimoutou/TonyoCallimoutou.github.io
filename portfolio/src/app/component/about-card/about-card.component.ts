import {Component, input, InputSignal} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {EventItem} from "../../page/about/event-item";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.scss'
})
export class AboutCardComponent {

  event: InputSignal<EventItem> = input.required<EventItem>();
}
