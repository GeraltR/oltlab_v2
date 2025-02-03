import { BottomBar } from "../BottomBar/BottomBar";
import { FooterCenter } from "../FooterCenter/FooterCenter";
import { LeftBar } from "../LeftBar/LeftBar";
import { RightBar } from "../RightBar/RightBar";

export function Layout() {
  return (
    <>
      <LeftBar />
      <BottomBar>
        <FooterCenter />
      </BottomBar>
      <RightBar />
    </>
  );
}
