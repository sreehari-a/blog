/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo, useEffect } from "react";
import { compose } from "redux";

import { useInjectReducer } from "../utils/injectReducer";
import { useInjectSaga } from "../utils/injectSaga";
import reducer from "./reducer";
import saga from "./saga";
import stylize from "../utils/stylize";
import styles from "./styles";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectFiles, selectLoading } from "./selectors";
import { loadTextFile } from "./actions";
import { useParams } from "react-router-dom";
import { postConfig } from "./config";
import PhotoViewer from "./components/photoViewer";

const key = "postView";
type Props = {
  classes: any;
  files: any;
  loading: boolean;
  readTextFile: Function;
};
export function PostViewer(props: Props) {
  const { classes, files, loading, readTextFile } = props;
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [currentPost, setCurrentPost] = React.useState<{
    title?: string;
    sections?: { header: string; content: string }[];
    photos?: string[];
  }>({});
  //@ts-ignore
  const { id }: { id: number } = useParams();
  useEffect(() => {
    if (!files[id] && postConfig[id]) {
      readTextFile({
        id,
      });
    } else if (files[id]) {
      setCurrentPost(files[id]);
    }
  }, [id, files, readTextFile]);
  return (
    <div className={`${classes.container} malayalam`}>
      <div className={classes.photosSection}>
        {
          //@ts-ignore
          <PhotoViewer photos={currentPost.photos} />
        }
      </div>
      <div className={classes.writingSection}>
        {currentPost.sections && (
          <>
            <div className={classes.postHeader}>{currentPost.title}</div>
            {currentPost.sections.map((section) => (
              <div className={classes.section}>
                <div className={classes.sectionHeader}>{section.header}</div>
                <div className={classes.sectionContent}>{section.content}</div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  files: selectFiles(),
  loading: selectLoading(),
});

function mapDispatchToProps(dispatch: any) {
  return {
    readTextFile: (payload: any) => dispatch(loadTextFile(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default stylize(compose(withConnect, memo)(PostViewer), styles);
