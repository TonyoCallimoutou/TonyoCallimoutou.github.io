import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-radio-bouton',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './radio-bouton.component.html',
  styleUrl: './radio-bouton.component.scss'
})
export class RadioBoutonComponent {

  @Input() formControlRadio: FormControl;

  constructor(private fb : FormBuilder) {
    this.formControlRadio = this.fb.control(null);
  }

}
