import * as fromList from './list';
import { ListEffects } from './list/list.effects';
import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";


export interface EmployeesState {
  list: fromList.ListState;
}


export const reducers: ActionReducerMap<any, any> = {
  list: fromList.reducer
};

export const effects: any[] = [
  ListEffects
];

export const getEmployeesState = createFeatureSelector<EmployeesState>('employees');
