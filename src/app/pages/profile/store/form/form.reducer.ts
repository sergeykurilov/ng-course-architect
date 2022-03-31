import * as fromActions from './form.actions';
import {ProfileForm} from "./form.models";

export type FormState = ProfileForm;

export const initialState: FormState = {
  personal: null,
  professional: null
}

export function reducer(state = initialState, action: fromActions.All): FormState {
  switch (action.type) {
    case fromActions.Types.SET: {
      return {
        ...state,
        ...action.form
      }
    }
    case fromActions.Types.UPDATE: {
      return {
        ...state,
        ...action.changes
      }
    }
    case fromActions.Types.CLEAR: {
      return {
        ...initialState
      }
    }

    default: {
      return state;
    }
  }
}
