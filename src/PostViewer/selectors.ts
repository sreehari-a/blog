/**
 * Homepage selectors
 */

import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectReducer = (state: any) => state.postView || initialState;

const selectLoading = () =>
  createSelector(selectReducer, (reducer) => reducer.loading);
const selectFiles = () =>
  createSelector(selectReducer, (reducer) => reducer.files);

export { selectReducer, selectLoading, selectFiles };
