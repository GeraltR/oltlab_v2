import { LayoutCenter } from "../components/LayoutCenter/LayoutCenter";
import { LayoutLeft } from "../components/LayoutLeft/LayoutLeft";
import { LayoutRight } from "../components/LayoutRight/LayoutRight";
import styles from "./MainPage.module.css";

export function MainPage() {
  const leftChapters = [
    { id: "1", key: "", label: "olt|tlo website", rightlabels: [{}] },
    { id: "2", key: "a", label: "olt.lab", rightlabels: [{}] },
    { id: "3", key: "b", label: "tlo.gallery" },
    { id: "4", key: "c", label: "enojy" },
  ];

  const rightChapters = [
    { id: 4, key: "a", label: "" },
    { id: 5, key: "b", label: "projects" },
    { id: 6, key: "c", label: "event" },
    { id: 7, key: "d", label: "store" },
  ];

  let activeName = "";

  const handleChapterOnMouseMove = (event) => {
    //alert(event.target.name);
    if (event.target.id != activeName) {
      activeName = event.target.id;
      console.log("Jestem");
      console.log(activeName);
    }
  };

  return (
    <div className={styles.mainPage}>
      <LayoutLeft
        chapters={leftChapters}
        onMouseMove={(e) => handleChapterOnMouseMove(e)}
      />
      <LayoutCenter />
      <LayoutRight
        chapters={rightChapters}
        onMouseMove={(e) => handleChapterOnMouseMove(e)}
      />
    </div>
  );
}
