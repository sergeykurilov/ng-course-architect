import * as fromList from '../store/list/list.reducer';
import {ActionReducerMap, createFeatureSelector} from "@ngrx/store";
import {ListEffects} from "../store/list/list.effects";

export interface JobsState {
  list: fromList.ListState
}


export const reducers: ActionReducerMap<JobsState, any> = {
  list: fromList.reducer
}

export const effects: any[] = [
  ListEffects
];

export const getJobsState = createFeatureSelector<JobsState>('jobs');
