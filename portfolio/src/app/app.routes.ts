import { Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {AboutComponent} from "./page/about/about.component";
import {ProjectComponent} from "./page/project/project.component";
import {ProjectDetailComponent} from "./page/project/project-detail/project-detail.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'project/:id', component: ProjectDetailComponent}
];
