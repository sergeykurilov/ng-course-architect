import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";
import * as formForm from './form/form.reducer';
import * as fromUser from './user/user.reducer';
import {UserEffects} from "./user/user.effects";

export interface ProfileState {
  form: formForm.FormState;
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<ProfileState, any> = {
  form: formForm.reducer,
  user: fromUser.reducer
};

export const effects: any[] = [
  UserEffects
];

export const getProfileState = createFeatureSelector<ProfileState>('profile')
