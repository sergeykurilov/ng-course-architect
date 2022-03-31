import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";
import * as formForm from './form/form.reducer';

export interface ProfileState {
  form: formForm.FormState;
}

export const reducers: ActionReducerMap<ProfileState, any> = {
  form: formForm.reducer
};

export const effects: any[] = [
];

export const getProfileState = createFeatureSelector<ProfileState>('profile')
