import {createSelector} from "@ngrx/store";
import {getProfileState, ProfileState} from "@src/app/pages/profile/store";
import {UserState} from "./user.reducer";


export const getUserState = createSelector(
  getProfileState,
  (state: ProfileState) => state.user,
)

export const getUser = createSelector(
  getUserState,
  (state: UserState) => state.entity,
)

export const getLoading = createSelector(
  getUserState,
  (state) => state.loading
)

export const getRole = createSelector(
  getUserState,
  (state: UserState) => state.entity.role
)
