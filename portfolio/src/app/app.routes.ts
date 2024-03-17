import { Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {AboutComponent} from "./page/about/about.component";
import {ProjectComponent} from "./page/project/project.component";
import {TestComponent} from "./page/test/test.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'test', component: TestComponent}
];
