import { LayoutCenter } from "../components/LayoutCenter/LayoutCenter";
import { LayoutLeft } from "../components/LayoutLeft/LayoutLeft";
import { LayoutRight } from "../components/LayoutRight/LayoutRight";
import styles from "./MainPage.module.css";

export function MainPage() {
  const rightChapter = [
    { id: 4, key: "", label: "projects" },
    { id: 5, key: "", label: "event" },
    { id: 6, key: "", label: "store" },
  ];

  return (
    <div className={styles.mainPage}>
      <LayoutLeft />
      <LayoutCenter />
      <LayoutRight />
    </div>
  );
}
