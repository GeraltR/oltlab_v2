import styles from "./LayoutCenter.module.css";
import { BottomLogoBar } from "../BottomLogoBar/BottomLogoBar";
import { FooterCenter } from "../FooterCenter/FooterCenter";
import { InsideMainLayout } from "../InsideMainLayout/InsideMainLayout";
import { LeftBar } from "../LeftBar/LeftBar";
import { MainCenterLayout } from "../MainCenterLayout/MainCenterLayout";
import { RightBar } from "../RightBar/RightBar";
import { TopCenterBar } from "../TopCenterBar/TopCenterBar";

export function LayoutCenter() {
  return (
    <div className={styles.layoutCenter}>
      <LeftBar />
      <MainCenterLayout>
        <TopCenterBar firstText="status:" secondText="work in progress..." />
        <InsideMainLayout></InsideMainLayout>
        <BottomLogoBar>
          <FooterCenter />
        </BottomLogoBar>
      </MainCenterLayout>
      <RightBar topText="2" bottomText="II" />
    </div>
  );
}
