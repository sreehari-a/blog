

import { LOAD_FILE, SAVE_POST, SET_LOADING } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function loadTextFile(file: any) {
  return {
    type: LOAD_FILE,
    payload: file,
  };
}
export function savePost(post: any) {
  return {
    type: SAVE_POST,
    payload: post,
  };
}
export function setLoading(isLoading: boolean) {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
}
