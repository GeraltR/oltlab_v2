import { LayoutCenter } from "../components/LayoutCenter/LayoutCenter";
import { LayoutLeft } from "../components/LayoutLeft/LayoutLeft";
import { LayoutRight } from "../components/LayoutRight/LayoutRight";
import styles from "./MainPage.module.css";

import OLTIMAGE from "../assets/img/mainprojects.png";
import TLOIMAGE from "../assets/img/maintlo.png";
import ENOJYIMAGE from "../assets/img/mainenojy.png";
import { useEffect, useState } from "react";

let activeName = "";

export function MainPage() {
  const [mainImage, setMainImage] = useState(OLTIMAGE);
  const [indexMainImage, setIndexMainImage] = useState(2);

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

  const handleChapterOnMouseMove = (event) => {
    if (event.target.id != activeName) {
      activeName = event.target.id;
      const index = String(
        activeName.replace("project", "").replace("Chapter", "")
      );
      setIndexMainImage(index);
    }
  };

  useEffect(() => {
    if (indexMainImage == 2) {
      setMainImage(OLTIMAGE);
    } else if (indexMainImage == 3) {
      setMainImage(TLOIMAGE);
    } else if (indexMainImage == 4) {
      setMainImage(ENOJYIMAGE);
    }
  }, [indexMainImage]);

  return (
    <div className={styles.mainPage}>
      <LayoutLeft
        chapters={leftChapters}
        onMouseMove={(e) => handleChapterOnMouseMove(e)}
      />
      <LayoutCenter heroImage={mainImage} />
      <LayoutRight
        chapters={rightChapters}
        onMouseMove={(e) => handleChapterOnMouseMove(e)}
      />
    </div>
  );
}
