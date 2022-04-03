import { createSelector } from "@ngrx/store";
import {getJobsState, JobsState} from "@src/app/pages/jobs/store";
import {listAdapter} from "@src/app/pages/jobs/store/list/list.reducer";


export const getListState = createSelector(
  getJobsState,
  (state: JobsState) => state.list
)

export const {
  selectIds,
  selectTotal,
  selectEntities,
  selectAll
} = listAdapter.getSelectors(getListState);



export const selectEntityById = createSelector(
  selectEntities,
  (entities:any, props: {id: string}) => {
    return entities(props.id);
  }
)
