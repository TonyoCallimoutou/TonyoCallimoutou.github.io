import { Component } from '@angular/core';
import {AvatarComponent} from "../../component/avatar/avatar.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    AvatarComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

}
