import {ProjectCategory, ProjectStack} from "../../../page/project/project";

export interface OptionSelect {
  name: OptionCategory;
  label: ProjectCategory | ProjectStack | OptionDefault;
  isSelected: boolean;
}

export enum OptionCategory {
  CATEGORY = "Category",
  STACK = "Stack"
}

export enum OptionDefault {
  ALL = "utils.all",
}

