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
      <LeftBar isMobileDevice={props.isMobileDevice} />
      <MainCenterLayout isMobileDevice={props.isMobileDevice}>
        <RightChapter
          isMobileDevice={props.isMobileDevice}
          chapters={props.chapters}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        ></RightChapter>
      </MainCenterLayout>
      <RightBar topText="3" bottomText="III" />
    </div>
  );
}
