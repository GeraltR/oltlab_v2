import styles from "./LayoutCenter.module.css";
import { BottomLogoBar } from "../BottomLogoBar/BottomLogoBar";
import { FooterCenter } from "../FooterCenter/FooterCenter";
import { InsideMainLayout } from "../InsideMainLayout/InsideMainLayout";
import { LeftBar } from "../LeftBar/LeftBar";
import { MainCenterLayout } from "../MainCenterLayout/MainCenterLayout";
import { RightBar } from "../RightBar/RightBar";
import { TopCenterBar } from "../TopCenterBar/TopCenterBar";
import { Hero } from "../Hero/Hero";

export function LayoutCenter(props) {
  return (
    <div
      className={`${
        props.isMobileDevice ? styles.layoutCenterMobile : styles.layoutCenter
      }`}
    >
      <LeftBar />
      <MainCenterLayout {...props}>
        <TopCenterBar
          firstText={props.isTitleGalery ? <>&nbsp;</> : "status:"}
          secondText={
            props.isTitleGalery ? props.nameOfProject : "work in progress..."
          }
        />
        <InsideMainLayout>
          <Hero {...props} />
        </InsideMainLayout>
        <BottomLogoBar {...props}>
          <FooterCenter />
        </BottomLogoBar>
      </MainCenterLayout>
      <RightBar {...props} topText="2" bottomText="II" />
    </div>
  );
}
