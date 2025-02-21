import { LeftBar } from "../LeftBar/LeftBar";
import { LeftChapter } from "../LeftChapter/LeftChapter";
import { MainCenterLayout } from "../MainCenterLayout/MainCenterLayout";
import { RightBar } from "../RightBar/RightBar";
import styles from "./LayoutLeft.module.css";

export function LayoutLeft(props) {
  //
  return (
    <div
      className={`${
        props.isMobileDevice ? styles.layoutLeftMobile : styles.layoutLeft
      }`}
      style={{ filter: `${props.isBlur ? "blur(4px)" : "blur(0)"}` }}
    >
      <LeftBar isMobileDevice={props.isMobileDevice} />
      <MainCenterLayout isMobileDevice={props.isMobileDevice}>
        <LeftChapter
          chapters={props.chapters}
          isMobileDevice={props.isMobileDevice}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        />
        <div
          className={`${
            props.isMobileDevice
              ? styles.leftChapterBottomLeftMobile
              : styles.leftChapterBottomLeft
          }`}
        >
          all rights reserved
        </div>
      </MainCenterLayout>
      <RightBar
        isMobileDevice={props.isMobileDevice}
        topText="1"
        bottomText="I"
      />
    </div>
  );
}
