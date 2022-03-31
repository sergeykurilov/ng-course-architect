import {createSelector} from "@ngrx/store";
import {getProfileState, ProfileState} from "../index";
import {FormState} from "@src/app/pages/profile/store/form/form.reducer";

export const getFormState = createSelector(
  getProfileState,
  (state: ProfileState) => state.form
);

export const getPersonalForm = createSelector(
  getFormState,
  (state: FormState) => !!state.personal && state.personal
);

export const getProfessionalForm = createSelector(
  getFormState,
  (state: FormState) => !!state.professional && state.professional
);
