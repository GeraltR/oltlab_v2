import { LeftBar } from "../LeftBar/LeftBar";
import { LeftChapter } from "../LeftChapter/LeftChapter";
import { MainCenterLayout } from "../MainCenterLayout/MainCenterLayout";
import { RightBar } from "../RightBar/RightBar";
import styles from "./LayoutLeft.module.css";

export function LayoutLeft() {
  return (
    <div className={styles.layoutLeft}>
      <LeftBar />
      <MainCenterLayout>
        <LeftChapter></LeftChapter>
      </MainCenterLayout>
      <RightBar topText="1" bottomText="I" />
    </div>
  );
}
