import { LeftBar } from "../LeftBar/LeftBar";
import { RightChapter } from "../RightChapter/RightChapter";
import { MainCenterLayout } from "../MainCenterLayout/MainCenterLayout";
import { RightBar } from "../RightBar/RightBar";

import styles from "./LayoutRight.module.css";

export function LayoutRight() {
  return (
    <div className={styles.layoutRight}>
      <LeftBar />
      <MainCenterLayout>
        <RightChapter></RightChapter>
      </MainCenterLayout>
      <RightBar topText="3" bottomText="III" />
    </div>
  );
}
