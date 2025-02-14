import { LeftBar } from "../LeftBar/LeftBar";
import { RightChapter } from "../RightChapter/RightChapter";
import { MainCenterLayout } from "../MainCenterLayout/MainCenterLayout";
import { RightBar } from "../RightBar/RightBar";

import styles from "./LayoutRight.module.css";

export function LayoutRight(props) {
  return (
    <div
      className={`${
        props.isMobileDevice ? styles.layoutRightMobile : styles.layoutRight
      }`}
    >
      <LeftBar />
      <MainCenterLayout isMobileDevice={props.isMobileDevice}>
        <RightChapter
          isMobileDevice={props.isMobileDevice}
          isLandScape={props.isLandScape}
          chapters={props.chapters}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
          onClick={props.onClick}
        />
      </MainCenterLayout>
      <RightBar
        isMobileDevice={props.isMobileDevice}
        topText="3"
        bottomText="III"
      />
    </div>
  );
}
