import {Action} from "@ngrx/store";
import {ProfileForm} from "@src/app/pages/profile/pages/form/form.component";


export enum Types {
  SET = '[Profile] [Form] Set',
  UPDATE = '[Profile] [Form] Update',
  CLEAR = '[Profile] [Form] Clear',
}

export class Set implements Action {
  readonly type = Types.SET;
  constructor(public form: ProfileForm) {
  }
}

export class Update implements Action {
  readonly type = Types.UPDATE;
  constructor(public changes: Partial<ProfileForm>) {
  }
}

export class Clear implements Action {
  readonly type = Types.CLEAR;
  constructor() {
  }
}


export type All = Set | Update | Clear;
