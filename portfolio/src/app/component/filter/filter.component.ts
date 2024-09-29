import {Component, computed, effect, EventEmitter, Output, signal, Signal} from '@angular/core';
import {SelectComponent} from "./select/select.component";
import {OptionCategory, OptionDefault, OptionSelect} from "./select/option-select";
import {ProjectCategory, ProjectStack} from "../../page/project/project";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {distinctUntilChanged} from "rxjs";
import {RadioBoutonComponent} from "./radio-bouton/radio-bouton.component";
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    CommonModule,
    SelectComponent,
    ReactiveFormsModule,
    RadioBoutonComponent
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  @Output() filterOr: EventEmitter<OptionSelect[]> = new EventEmitter<OptionSelect[]>();
  @Output() filterAnd: EventEmitter<OptionSelect[]> = new EventEmitter<OptionSelect[]>();


  listOptionsCategory: OptionSelect[] = [
    {name: OptionCategory.CATEGORY, label: OptionDefault.ALL, isSelected: false},
  ];

  listOptionsStack: OptionSelect[] = [
    {name: OptionCategory.STACK, label: OptionDefault.ALL, isSelected: false},
  ];

  form: FormGroup;
  formControlCategory: FormControl;
  formControlStack: FormControl;
  formControlIsOr: FormControl;

  listFilter : OptionSelect[][] = [
    this.listOptionsCategory,
    this.listOptionsStack,
  ]

  constructor(private fb : FormBuilder) {
    this.constructorOfList();
    this.formControlCategory = this.fb.control(null);
    this.formControlStack = this.fb.control(null);
    this.formControlIsOr = this.fb.control(false);


    this.form = this.fb.group({
      category: this.formControlCategory,
      stack: this.formControlStack,
      conditionIsOr: this.formControlIsOr
    });

    this.form.valueChanges
      .pipe(
        takeUntilDestroyed()
      )
      .subscribe((value) => {
        let list = this.listFilter.flatMap((listOption: OptionSelect[]) => {
          return listOption.filter((option: OptionSelect) => option.isSelected);
        });

        if (value.conditionIsOr) {
          this.filterAnd.emit(list);
          return;
        } else {
          this.filterOr.emit(list);
          return;
        }
    })
  }

  constructorOfList() {
    Object.values(ProjectCategory).forEach((value: string, index: number) => {
      this.listOptionsCategory.push({name: OptionCategory.CATEGORY, label: Object.values(ProjectCategory)[index], isSelected: false});
    });

    Object.values(ProjectStack).forEach((value: string, index: number) => {
      this.listOptionsStack.push({name: OptionCategory.STACK, label: Object.values(ProjectStack)[index], isSelected: false});
    });
  }

}
