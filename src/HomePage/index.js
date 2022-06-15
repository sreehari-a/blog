/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo, useCallback, useEffect } from "react";
import { compose } from "redux";

import { useInjectReducer } from "../utils/injectReducer";
import { useInjectSaga } from "../utils/injectSaga";
import reducer from "./reducer";
import saga from "./saga";
import stylize from "../utils/stylize";
import styles from "./styles";
import photo from "../images/HAR_0807.jpg";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import PostViewer from "../PostViewer/Loadable";
import { createStructuredSelector } from "reselect";
import { fetchPosts } from "./actions";
import { connect } from "react-redux";
import { selectPosts } from "./selectors";

const key = "home";
const posts = [
  {
    id: 1,
    title: "പോണ്ടിച്ചേരി",
    cover: photo,
    description:
      "പോണ്ടിച്ചേരിയിലൂടെ ഒരു പറ്റം  സുഹൃത്തുക്കളുമായി അലഞ്ഞു തിരിയുമ്പോൾ  ചെന്ന് പെട്ട കുരുക്കുകളിലേക്ക് ഒരു തിരിഞ്ഞു നോട്ടം.",
  },
];

export function HomePage({ classes, getAllPosts, posts }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const history = useHistory();
  const match = useRouteMatch();
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts])
  return (
    <Switch>
      <Route path={`${match.path}/:id`}>
        <PostViewer />
      </Route>
      <Route path={match.path}>
        <div className={classes.container}>
          <div className={`${classes.intro} caligraphy`}>
            Ready to read my stories?
            <div className={`${classes.introDescription}`}>
              Happy to see you read Malayalam
            </div>
          </div>
          <div className={classes.postsContainer}>
            {posts.map((post) => {
              const showPost = () => {
                history.push(`/blog/${post.id}`);
              };
              return (
                <div className={classes.postContainer} onClick={showPost}>
                  <div
                    style={{ backgroundImage: `url(${post.cover})` }}
                    className={classes.postBg}
                  ></div>
                  <div className={`malayalam ${classes.postDetails}`}>
                    <div className={classes.postHeader}>{post.title}</div>
                    <div className={classes.postDesc}>{post.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Route>
    </Switch>
  );
}
const mapStateToProps = createStructuredSelector({
  posts: selectPosts(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: () => dispatch(fetchPosts()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default stylize(compose(withConnect, memo)(HomePage), styles);
