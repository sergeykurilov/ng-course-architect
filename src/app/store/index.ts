import { ActionReducerMap } from '@ngrx/store';
import * as fromDictionaries from './dictionaries';

export interface State {
  dictionaries: fromDictionaries.DictionariesState;
}

export const reducers: ActionReducerMap<State, fromDictionaries.All> = {
  dictionaries: fromDictionaries.reducer,
};

export const effects = [
  fromDictionaries.DictionariesEffect
];
