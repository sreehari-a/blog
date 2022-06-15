import React, { useEffect, useState } from "react";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";
import stylize from "../../utils/stylize";
import styles from "./photoViewerStyles";
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import colors from "../../colors";

type Props = {
  classes: any;
  photos: string[];
};
const LeftArrowSvg = () => {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="left-circle"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 010-12.9l246-178a8 8 0 0112.7 6.5v46.8z"></path>
    </svg>
  );
};
const RightArrowSvg = () => {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="right-circle"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z"></path>
    </svg>
  );
};
export function PhotoViewer(props: Props) {
  const { classes, photos = [] } = props;
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < 0) {
      setIndex(photos.length - 1);
    }
    if (index > photos.length - 1) {
      setIndex(0);
    }
  }, [index]);
  const appendIndex = () => setIndex(index + 1);
  const prependIndex = () => setIndex(index - 1);
  return (
    <div className={classes.container}>
      {/* {photos.map((photo) => (
        // <div
        //   style={{ backgroundImage: `url(${photo})` }}
        //   className={classes.postBg}
        // ></div>
        <img src={photo} className={classes.postBg} />
      ))} */}
      <div className={classes.imageContainer}>
        <button
          id="<"
          name="<"
          className={`${classes.leftButton} ${classes.toggleButton}`}
          onClick={prependIndex}
        >
          {/* <LeftCircleTwoTone twoToneColor="#eb2f96" /> */}
          <Icon component={LeftArrowSvg} style={{color: colors.primary}} />
        </button>
        <img src={photos[index]} alt="Loading..." className={classes.postBg} />
        <button
          id=">"
          name=">"
          className={`${classes.rightButton} ${classes.toggleButton}`}
          onClick={appendIndex}
        >
          {/* <RightCircleTwoTone twoToneColor="#eb2f96" /> */}
          <Icon component={RightArrowSvg} style={{color: colors.primary}}/>
        </button>
      </div>
    </div>
  );
}
export default stylize(PhotoViewer, styles);
