import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {Project} from "./project";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {ProjectService} from "../../service/project.service";
import {take} from "rxjs";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    TranslateModule,
    NgForOf,
    NgOptimizedImage,
    NgIf,
    ProjectDetailComponent
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projects: Project[] = [];

  detailProject: Project | null = null;

  constructor(private service: ProjectService) {
    this.getProject();
  }

  getProject() {
    this.service.getData()
      .pipe(take(1))
      .subscribe((data: Project[]) => {
        this.projects = data;
      });
  }

  onClick(project: Project) {
    this.detailProject = project;
  }

  onGoBack() {
    this.detailProject = null;
  }


}
