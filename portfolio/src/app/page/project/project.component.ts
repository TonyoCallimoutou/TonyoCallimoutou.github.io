import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {Project} from "./project";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {ProjectService} from "../../service/project.service";
import {from, groupBy, mergeMap, take, toArray} from "rxjs";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NgOptimizedImage,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projects: Project[][] = [];

  constructor(private service: ProjectService) {
    this.getProject();
  }

  getProject() {
    this.service.getData()
      .pipe(
        take(1),
        mergeMap(projects => from(projects).pipe(
          groupBy(project => project.category),
          mergeMap(group => group.pipe(toArray())),
          toArray()
        ))
      )
      .subscribe((groupedProjects: Project[][]) => {
        this.projects = groupedProjects;
      });
  }

  onClick(project: Project) {
    window.open(project.link, "_blank");
  }


}
