import * as fromActions from './user.actions';
import {User} from "@src/app/models/backend";



export interface UserState {
  entity: User;
  loading: boolean;
  error: string;
}

const initialState: UserState = {
  entity: null,
  loading: null,
  error: null
}

export function reducer(state = initialState, action: fromActions.All) {
  switch (action.type) {
    //Read
    case fromActions.Types.READ: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }

    case fromActions.Types.READ_SUCCESS: {
      return {
        ...state,
        entity: action.user,
        loading: false
      }
    }

    case fromActions.Types.READ_ERROR: {
      return {
        entity: null,
        loading: false,
        error: null
      }
    }

    //Clear
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
