/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from "redux-saga/effects";
import { repoLoadingError } from "../App/actions";
import APIService from "../APIService";
import { FETCH_POSTS } from "./constants";
import { setPosts } from "./actions";

/**
 * Github repos request/response handler
 */
export function* getPosts() {
  // Select username from store

  try {
    const blogService = APIService.getBlogRunner();
    let posts = [];
    const { data } = yield call(() => blogService.getAllPosts());
    data.forEach((post) => {
      const {
        id,
        attributes: {
          title,
          description,
          cover: {
            data: {
              attributes: {
                formats: {
                  thumbnail: { url } = {},
                } ={},
              } ={},
            } = {},
          } = {},
        } = {},
      } = post;
      posts.push({
        id,
        title,
        description,
        cover: url,
      });
    });
    yield put(setPosts(posts));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* fetchPosts() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(FETCH_POSTS, getPosts);
}
