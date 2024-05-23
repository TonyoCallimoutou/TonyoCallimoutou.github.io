import {Component, input, InputSignal} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {Project} from "../../page/project/project";

@Component({
  selector: 'app-project-card',
  standalone: true,
    imports: [
        NgForOf,
        NgOptimizedImage,
        TranslateModule
    ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  project: InputSignal<Project> = input.required<Project>();

}
