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
    >
      <LeftBar />
      <MainCenterLayout>
        <LeftChapter
          chapters={props.chapters}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        ></LeftChapter>
      </MainCenterLayout>
      <RightBar
        topText="1"
        bottomText="I"
        bottomTextLeft="all rights reserved"
      />
    </div>
  );
}
