import { LayoutCenter } from "../components/LayoutCenter/LayoutCenter";
import { LayoutLeft } from "../components/LayoutLeft/LayoutLeft";
import { LayoutRight } from "../components/LayoutRight/LayoutRight";
import styles from "./MainPage.module.css";
import { useEffect, useState } from "react";

import OLTIMAGE from "../assets/img/mainoltlab.png";
import TLOIMAGE from "../assets/img/maintlo.png";
import ENOJYIMAGE from "../assets/img/mainenojy.png";
import PL_3D_145_2024 from "../assets/img/mainpl_3d_145_2024.png";
import FR_3D_GTOBC_2024 from "../assets/img/mainfr_3d_gtobc_2024.png";
import FR_ARCG_POM_2024 from "../assets/img/mainfr_arch_pom_2024.png";
import PL_URB_KAT_2024 from "../assets/img/mainpl_urb_kat_2024.png";
import FR_ARCH_CONC_2024 from "../assets/img/mainfr_arch_conc_2024.png";
import STERCHING from "../assets/img/mainprojects.png";
import BELGRADE from "../assets/img/mainbelgrade.png";
import ADRIANZERT from "../assets/img/mainadrianzert.png";
import M14BY5 from "../assets/img/main14by5.png";
import { OltLabGalery29 } from "./OltLabGalery29";

let activeName = "";

export function MainPage() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [mainImage, setMainImage] = useState();
  const [indexMainImage, setIndexMainImage] = useState(0);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isLandScape, setIsLandScape] = useState(true);
  const [heighDeviceSize, setHeighDeviceSize] = useState(3);
  const [galeryVisibled, setGaleryVisibled] = useState(false);

  const leftChapters = [
    {
      id: 1,
      key: "",
      label: "olt|tlo website",
      rightlabels: [{}],
      linkTo: "/",
    },
    { id: 2, key: "a", label: "olt.lab", rightlabels: [{}], linkTo: "/oltlab" },
    {
      id: 3,
      key: "b",
      label: "tlo.gallery",
      rightlabels: [{}],
      linkTo: "/tlogalery",
    },
    { id: 4, key: "c", label: "enojy", rightlabels: [{}], linkTo: "/enojy" },
  ];

  const rightChapters = [
    { id: 5, key: "a", label: "" },
    { id: 6, key: "b", label: "projects" },
    { id: 7, key: "c", label: "event" },
    { id: 8, key: "d", label: "store" },
  ];

  const handleChapteronMouseEnter = (event) => {
    if (event.target.id != activeName) {
      activeName = event.target.id;
      const index = String(
        activeName.replace("project", "").replace("Chapter", "")
      );
      setIndexMainImage(index);
    }
  };

  const handleChapterMoseLeave = (event) => {
    activeName = "";
    setIndexMainImage(0);
  };

  const handleChapterOnClik = (event) => {
    console.log(event.target.id);
    console.log(galeryVisibled);
    setGaleryVisibled(!galeryVisibled);
  };

  useEffect(() => {
    if (indexMainImage == 0) {
      setMainImage();
    } else if (indexMainImage == 2) {
      setMainImage(OLTIMAGE);
    } else if (indexMainImage == 3) {
      setMainImage(TLOIMAGE);
    } else if (indexMainImage == 4) {
      setMainImage(ENOJYIMAGE);
    } else if (indexMainImage == 21) {
      setMainImage(M14BY5);
    } else if (indexMainImage == 22) {
      setMainImage(ADRIANZERT);
    } else if (indexMainImage == 23) {
      setMainImage(BELGRADE);
    } else if (indexMainImage == 24) {
      setMainImage(STERCHING);
    } else if (indexMainImage == 25) {
      setMainImage(FR_ARCH_CONC_2024);
    } else if (indexMainImage == 26) {
      setMainImage(PL_URB_KAT_2024);
    } else if (indexMainImage == 27) {
      setMainImage(FR_ARCG_POM_2024);
    } else if (indexMainImage == 28) {
      setMainImage(FR_3D_GTOBC_2024);
    } else if (indexMainImage == 29) {
      setMainImage(PL_3D_145_2024);
    }
  }, [indexMainImage, galeryVisibled]);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsLandScape(window.innerWidth >= window.innerHeight);
      setIsMobileDevice(window.innerWidth < 1320);
      if (window.innerHeight <= 730 && window.innerWidth > 640)
        setHeighDeviceSize(2);
      else if (window.innerHeight > 900 && window.innerWidth > 640);
      else setHeighDeviceSize(3);
      if (window.innerWidth < 640) setHeighDeviceSize(1);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${
        isMobileDevice
          ? isLandScape
            ? styles.mainPageMobileLandScape
            : styles.mainPageMobilePortial
          : styles.mainPage
      }`}
    >
      {/* {`${isMobileDevice ? "tak" : "nie"}`} */}
      <LayoutLeft
        isMobileDevice={isMobileDevice}
        chapters={leftChapters}
        onMouseEnter={(e) => handleChapteronMouseEnter(e)}
        onMouseLeave={(e) => handleChapterMoseLeave(e)}
      />
      <LayoutCenter
        isMobileDevice={isMobileDevice}
        heroImage={mainImage}
        heighDeviceSize={heighDeviceSize}
      />
      <LayoutRight
        isMobileDevice={isMobileDevice}
        isLandScape={isLandScape}
        chapters={rightChapters}
        onMouseEnter={(e) => handleChapteronMouseEnter(e)}
        onMouseLeave={(e) => handleChapterMoseLeave(e)}
        onClick={(e) => handleChapterOnClik(e)}
      />
      <OltLabGalery29
        visible={galeryVisibled}
        isMobileDevice={isMobileDevice}
        isLandScape={isLandScape}
        onClick={(e) => handleChapterOnClik(e)}
      />
    </div>
  );
}
