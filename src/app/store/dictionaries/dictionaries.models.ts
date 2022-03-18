import {Item, ControlItem, Icon} from "@src/app/models/frontend";
export {Item, ControlItem, Icon} from "@src/app/models/frontend";

export interface Dictionaries {
  roles: Dictionary;
  specializations: Dictionary;
  qualifications: Dictionary;
  skills: Dictionary;
  countries: Dictionary;
}

export interface Dictionary {
  items: Item[];
  controlItems: ControlItem[];
}
