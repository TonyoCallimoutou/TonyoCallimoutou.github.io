import {Component} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {Project, ProjectCategory, ProjectStack} from "./project";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {ProjectService} from "../../service/project.service";
import {from, groupBy, mergeMap, take, toArray} from "rxjs";
import {ProjectCardComponent} from "../../component/project-card/project-card.component";
import {FilterComponent} from "../../component/filter/filter.component";
import {OptionCategory, OptionSelect} from "../../component/filter/select/option-select";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NgOptimizedImage,
    ProjectCardComponent,
    FilterComponent,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projects: Project[][] = [];
  projetsFiltered: Project[][] = [];

  listFilterActivated: OptionSelect[] = [];
  isOrCondition: boolean | null = null;

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
        this.projetsFiltered = groupedProjects;
      });
  }

  groupProjectByCategory(projects: Project[]): Project[][] {
    return projects.reduce((acc: Project[][], project: Project) => {
      const index = acc.findIndex((listProject: Project[]) => listProject[0].category == project.category);
      if (index == -1) {
        acc.push([project]);
      } else {
        acc[index].push(project);
      }
      return acc;
    }, []);
  }

  onClick(project: Project) {
    window.open(project.link, "_blank");
  }

  onFilterWithOrCondition(filter: OptionSelect[]) {
    if (filter.length != this.listFilterActivated.length || this.isOrCondition == false) {
      this.isOrCondition = true;
      this.listFilterActivated = filter;
      if (this.listFilterActivated.length == 0) {
        this.projetsFiltered = this.projects;
        return;
      }
      this.projetsFiltered = [];
      let filteredProjects: Project[] = [];
      this.listFilterActivated.forEach((option: OptionSelect) => {
        if (option.name == OptionCategory.CATEGORY) {
          this.projects.forEach((listProject: Project[]) => {
            if (listProject[0].category !== option.label as ProjectCategory) {
              return;
            } else {
              filteredProjects.push(...listProject);
            }

          });
        } else if (option.name == OptionCategory.STACK) {
          filteredProjects.push(...this.projects.flatMap((listProject: Project[]) => {
            return listProject.filter((project: Project) => project.stacks.includes(option.label as ProjectStack));
          }));
        }
      });

      this.projetsFiltered = this.groupProjectByCategory(filteredProjects);
    }
  }

  onFilterWithANDCondition(filter: OptionSelect[]) {
    if (filter.length != this.listFilterActivated.length || this.isOrCondition == true) {
      this.isOrCondition = false;
      this.listFilterActivated = filter;
      this.projetsFiltered = this.projects;
      if (this.listFilterActivated.length == 0) {
        return;
      }
      this.listFilterActivated.forEach((option: OptionSelect) => {
        if (option.name == OptionCategory.CATEGORY) {
          this.projetsFiltered = this.projetsFiltered.filter((listProject: Project[]) => {
            return listProject[0].category == option.label as ProjectCategory;
          });
        } else if (option.name == OptionCategory.STACK) {
          this.projetsFiltered = this.projetsFiltered.map((listProject: Project[]) => {
            return listProject.filter((project: Project) => project.stacks.includes(option.label as ProjectStack));
          });
        }
      });
    }
  }


}
