import { NavLink } from "react-router-dom";
import { BottomBar } from "../BottomBar/BottomBar";
import { InsideChapter } from "../InsideChapter/InsideChapter";
import { TopRightBar } from "../TopRightBar/TopRightBar";
import styles from "./RightChapter.module.css";
import { TopLeftBar } from "../TopLeftBar/TopLeftBar";

export function RightChapter(props) {
  const projects = [
    { id: 29, key: "a", label: " PL_3D_14/5_2024", link: "" },
    { id: 28, key: "b", label: " FR_3D_GToBC_2024", link: "" },
    { id: 27, key: "c", label: " FR_ARCH_POM_2024", link: "" },
    { id: 26, key: "d", label: " PL_URB_KAT_2024", link: "" },
    { id: 25, key: "e", label: " FR_ARCH_CONC_2024", link: "" },
  ];

  const events = [
    { id: 24, key: "a", label: "Stretching 10.10–11.11.2024", link: "" },
    { id: 23, key: "b", label: "Belgrade 23.06–30.06.2024", link: "" },
    { id: 22, key: "c", label: "Adrian Zert 09.03–04.04.2024", link: "" },
    { id: 21, key: "d", label: "14by5 23.02–03.03.2024", link: "" },
  ];

  return (
    <>
      <div
        className={`${
          props.isMobileDevice && props.isLandScape
            ? styles.rightChapterWithTopMarginLandScape
            : styles.rightChapterWithTopMargin
        }`}
      >
        <TopLeftBar firstText={props.chapters[0].label} />
        <InsideChapter
          isMobileDevice={props.isMobileDevice}
          isLandScape={props.isLandScape}
        >
          <BottomBar
            isMobileDevice={props.isMobileDevice}
            isLandScape={props.isLandScape}
          >
            recent
          </BottomBar>
        </InsideChapter>
      </div>
      <div
        className={`${
          props.isMobileDevice && props.isLandScape
            ? styles.rightChapterMObileLandscape
            : styles.rightChapter
        }`}
      >
        <TopRightBar
          firstText={props.chapters[1].label}
          marginLeft="1.5rem"
          name={`project${props.chapters[1].id}Chapter`}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        />
        <InsideChapter
          isMobileDevice={props.isMobileDevice}
          isLandScape={props.isLandScape}
        >
          <ul>
            {projects.map((project) => {
              return (
                <li
                  key={project.key}
                  name={`project${project.id}LI`}
                  id={`project${project.id}Chapter`}
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                  onClick={props.onClick}
                >
                  {project.id}
                  <NavLink
                    className={styles.rightChapterNavLink}
                    to={project.link}
                    name={`project${project.id}NavLink`}
                    id={`project${project.id}Chapter`}
                    onMouseEnter={props.onMouseEnter}
                    onMouseLeave={props.onMouseLeave}
                    onClick={props.onClick}
                  >
                    {project.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </InsideChapter>
      </div>
      <div className={styles.rightChapter}>
        <TopRightBar
          firstText={props.chapters[2].label}
          marginLeft="1.5rem"
          name={`project${props.chapters[2].id}Chapter`}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        />
        <InsideChapter
          isMobileDevice={props.isMobileDevice}
          isLandScape={props.isLandScape}
        >
          <ul>
            {events.map((oltevent) => {
              return (
                <li
                  key={oltevent.key}
                  name={`oltevent${oltevent.id}LI`}
                  id={`project${oltevent.id}Chapter`}
                  onMouseEnter={props.onMouseEnter}
                  onMouseLeave={props.onMouseLeave}
                  onClick={props.onClick}
                >
                  <NavLink
                    className={styles.rightOltEventLink}
                    to={oltevent.link}
                    id={`project${oltevent.id}Chapter`}
                    onMouseEnter={props.onMouseEnter}
                    onMouseLeave={props.onMouseLeave}
                    onClick={props.onClick}
                  >
                    {oltevent.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </InsideChapter>
      </div>
      <div className={styles.rightChapter}>
        <TopRightBar
          firstText={props.chapters[3].label}
          marginLeft="1.5rem"
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
          name={`project${props.chapters[3].id}Chapter`}
        />
        <div className={styles.rightChapterComingSoon}>coming soon...</div>
      </div>
    </>
  );
}
