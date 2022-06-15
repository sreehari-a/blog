/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const selectPosts = () =>
  createSelector(
    selectHome,
    homeState => homeState.posts,
  );

export { selectHome, selectPosts };
