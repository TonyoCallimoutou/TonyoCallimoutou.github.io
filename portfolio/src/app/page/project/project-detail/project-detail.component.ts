import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Project} from "../project";

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent {
  @Input() project!: Project;
  @Output() goBack = new EventEmitter<void>();

}
