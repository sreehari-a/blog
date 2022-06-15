/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from "redux-saga/effects";
import APIService from "../APIService";
import { savePost } from "./actions";
import { postConfig } from "./config";

import { LOAD_FILE } from "./constants";
import { getSectionizedText } from "./utils";

/**
 * Github repos request/response handler
 */
export function* readTextFile(action: any) {
  try {
    const { id } = action.payload;
    const blogService = APIService.getBlogRunner();
    const { data = {} } = yield call(() => blogService.getPostDetails(id));
    const {
      attributes: {
        title = '',
        sections = [],
        photos: {data: photos = []} = {},
      } = {},
    } = data;
    const post = {
      title,
      sections,
      photos: photos.map((photoObj: any) => {
        const {attributes: {formats: {medium: {url = ''} = {}} = {}} = {}} = photoObj;
        return url;
      }),
    }
    
    yield put(
      savePost({
        id,
        post,
      })
    );
  } catch (err) {}
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getPost() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_FILE, readTextFile);
}
