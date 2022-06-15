/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from "immer";
import { SAVE_POST, SET_LOADING } from "./constants";

// The initial state of the App
export const initialState = {
  files: {},
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SAVE_POST:
        draft.files = {
          ...draft.files,
          [action.payload.id]: action.payload.post,
        };
        break;
      case SET_LOADING:
        draft.loading = action.payload;
        break;
    }
  });

export default homeReducer;
