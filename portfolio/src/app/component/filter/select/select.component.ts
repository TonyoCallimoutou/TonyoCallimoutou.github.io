import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  InputSignal,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {OptionSelect} from "./option-select";
import {TranslateModule} from "@ngx-translate/core";
import {distinctUntilChanged, filter} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements OnChanges{

  listOptions: InputSignal<OptionSelect[]> = input.required<OptionSelect[]>();
  @Output() OptionSelected: EventEmitter<OptionSelect> = new EventEmitter<OptionSelect>();

  @Input() formControlSelect: FormControl;

  constructor(private fb : FormBuilder) {
    this.formControlSelect = this.fb.control(null);
  }

  ngOnChanges(changes:SimpleChanges) {
    if (changes['formControlSelect']) {
      this.formControlSelect.valueChanges
        .pipe(
          filter((value: OptionSelect) => value != null),
          distinctUntilChanged(),
        )
        .subscribe((value: OptionSelect) => {
          if (value == this.listOptions()[0]) {
            this.listOptions().forEach((option: OptionSelect) => {
              option.isSelected = true;
            });
          } else {
            value.isSelected = true;
          }

          this.formControlSelect.reset();
        });
    }
  }


  removeOption(option: OptionSelect) {
    option.isSelected = false;
    this.listOptions()[0].isSelected = false;
    this.formControlSelect.reset()
  }
}
