import { LeftBar } from "../LeftBar/LeftBar";
import { MainCenterLayout } from "../MainCenterLayout/MainCenterLayout";
import { RightBar } from "../RightBar/RightBar";
import { TopCenterBar } from "../TopCenterBar/TopCenterBar";
import styles from "./LayoutLeft.module.css";

export function LayoutLeft() {
  return (
    <div className={styles.layoutLeft}>
      <LeftBar />
      <MainCenterLayout>
        <TopCenterBar firstText="olt|tlo website" secondText=" " />
      </MainCenterLayout>
      <RightBar topText="1" bottomText="I" />
    </div>
  );
}
