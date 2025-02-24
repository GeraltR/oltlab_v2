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
      style={{
        filter: `${props.isBlur ? "blur(4px)" : "blur(0)"}`,
      }}
    >
      <LeftBar />
      <MainCenterLayout {...props}>
        <RightChapter {...props} />
      </MainCenterLayout>
      <RightBar {...props} topText="3" bottomText="III" />
    </div>
  );
}
