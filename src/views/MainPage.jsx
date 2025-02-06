import { LayoutCenter } from "../components/LayoutCenter/LayoutCenter";
import { LayoutLeft } from "../components/LayoutLeft/LayoutLeft";
import { LayoutRight } from "../components/LayoutRight/LayoutRight";
import styles from "./MainPage.module.css";

export function MainPage() {
  return (
    <div className={styles.mainPage}>
      <LayoutLeft />
      <LayoutCenter />
      <LayoutRight />
    </div>
  );
}
