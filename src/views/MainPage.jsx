import { useEffect, useState } from "react";
import styles from "./MainPage.module.css";
import { LayoutCenter } from "../components/LayoutCenter/LayoutCenter";
import { LayoutLeft } from "../components/LayoutLeft/LayoutLeft";
import { LayoutRight } from "../components/LayoutRight/LayoutRight";
import { MAIN_IMAGE } from "../constans/images";
import { OltLabGalery29 } from "./OltLabGalery29";
import { OltLabGalery28 } from "./OltLabGalery28";
import { OltLabGalery27 } from "./OltLabGalery27";
import { OltLabGalery26 } from "./OltLabGalery26";
import { OltLabGalery25 } from "./OltLabGalery25";
import { OltLabGalery24 } from "./OltLabGalery24";
import { OltLabGalery23 } from "./OltLabGalery23";
import { OltLabGalery22 } from "./OltLabGalery22";
import { OltLabGalery21 } from "./OltLabGalery21";
import { BottomLogoBar } from "../components/BottomLogoBar/BottomLogoBar";
import { FooterCenter } from "../components/FooterCenter/FooterCenter";

let activeName = "";

export function MainPage() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [mainImage, setMainImage] = useState({
    name: "",
    path: "",
  });
  const [isVisibledImage, setIsVisibledImage] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isLandScape, setIsLandScape] = useState(true);
  const [heighDeviceSize, setHeighDeviceSize] = useState(3);
  const [galeryVisibled, setGaleryVisibled] = useState(0);
  const [stayMainImage, setStayMainImage] = useState(false);

  const leftChapters = [
    {
      id: 1,
      key: "",
      label: "olt|tlo website",
      rightlabels: [{}],
      linkTo: "/",
      name: "LeftFirst",
    },
    {
      id: 2,
      key: "a",
      label: "olt.lab instagram",
      rightlabels: [{}],
      linkTo: "https://www.instagram.com/olt.lab",
      name: "LeftA",
    },
    {
      id: 3,
      key: "b",
      label: "tlo.gallery instagram",
      rightlabels: [{}],
      linkTo: "https://www.instagram.com/tlo_background",
      name: "LeftB",
    },
    {
      id: 4,
      key: "c",
      label: "editorial",
      rightlabels: [{}],
      linkTo: "https://enojy.tumblr.com",
      name: "Left",
    },
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
      const actualiImage = MAIN_IMAGE.find((image) => {
        return image.name === activeName;
      });
      if (actualiImage.path != "") setMainImage(actualiImage);
      setIsVisibledImage(actualiImage.path != "");
    }
  };

  const handleChapterMoseLeave = () => {
    activeName = "";
    setIsVisibledImage(stayMainImage);
  };

  const handleChapterOnClik = (event) => {
    let galeryNumber = event.target.id;
    galeryNumber = galeryNumber.replace("project", "").replace("Chapter", "");
    setGaleryVisibled(galeryNumber);
    setStayMainImage(galeryNumber.length > 0);
    setIsVisibledImage(galeryNumber.length > 0);
  };

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
        isLandScape={isLandScape}
        chapters={leftChapters}
        isBlur={galeryVisibled != ""}
      />
      <LayoutCenter
        isMobileDevice={isMobileDevice}
        isTitleGalery={galeryVisibled != ""}
        nameOfProject={mainImage.nameOfProject}
        heroImage={mainImage.path}
        heroWidth={mainImage.width}
        heroHeight={mainImage.heigh}
        heroHidden={!isVisibledImage}
        heighDeviceSize={heighDeviceSize}
        isBlur={galeryVisibled != ""}
      />
      <LayoutRight
        isMobileDevice={isMobileDevice}
        isLandScape={isLandScape}
        chapters={rightChapters}
        isBlur={galeryVisibled != ""}
        onMouseEnter={(e) => handleChapteronMouseEnter(e)}
        onMouseLeave={(e) => handleChapterMoseLeave(e)}
        onClick={(e) => handleChapterOnClik(e)}
      />
      {isMobileDevice && (
        <BottomLogoBar
          isMobileDevice={isMobileDevice}
          isLandScape={isLandScape}
        >
          <FooterCenter />
        </BottomLogoBar>
      )}
      <OltLabGalery29
        visible={galeryVisibled == 29}
        isMobileDevice={isMobileDevice}
        isLandScape={isLandScape}
        onClick={(e) => handleChapterOnClik(e)}
      />
      <OltLabGalery28
        visible={galeryVisibled == 28}
        isMobileDevice={isMobileDevice}
        isLandScape={isLandScape}
        onClick={(e) => handleChapterOnClik(e)}
      />
      <OltLabGalery27
        visible={galeryVisibled == 27}
        isMobileDevice={isMobileDevice}
        isLandScape={isLandScape}
        onClick={(e) => handleChapterOnClik(e)}
      />
      <OltLabGalery26
        visible={galeryVisibled == 26}
        isMobileDevice={isMobileDevice}
        isLandScape={isLandScape}
        onClick={(e) => handleChapterOnClik(e)}
      />
      <OltLabGalery25
        visible={galeryVisibled == 25}
        isMobileDevice={isMobileDevice}
        isLandScape={isLandScape}
        onClick={(e) => handleChapterOnClik(e)}
      />
      <OltLabGalery24
        visible={galeryVisibled == 24}
        isMobileDevice={isMobileDevice}
        isLandScape={isLandScape}
        onClick={(e) => handleChapterOnClik(e)}
      />
      <OltLabGalery23
        visible={galeryVisibled == 23}
        isMobileDevice={isMobileDevice}
        isLandScape={isLandScape}
        onClick={(e) => handleChapterOnClik(e)}
      />
      <OltLabGalery22
        visible={galeryVisibled == 22}
        isMobileDevice={isMobileDevice}
        isLandScape={isLandScape}
        onClick={(e) => handleChapterOnClik(e)}
      />
      <OltLabGalery21
        visible={galeryVisibled == 21}
        isMobileDevice={isMobileDevice}
        isLandScape={isLandScape}
        onClick={(e) => handleChapterOnClik(e)}
      />
    </div>
  );
}
