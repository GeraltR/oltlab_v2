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
      <LeftBar {...props} />
      <MainCenterLayout {...props}>
        <LeftChapter {...props} />
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
      <RightBar {...props} topText="1" bottomText="I" />
    </div>
  );
}
