import { NavLink } from "react-router-dom";
import { BottomBar } from "../BottomBar/BottomBar";
import { InsideChapter } from "../InsideChapter/InsideChapter";
import { LeftBar } from "../LeftBar/LeftBar";
import { TopRightBar } from "../TopRightBar/TopRightBar";
import styles from "./RightChapter.module.css";
import { TopLeftBar } from "../TopLeftBar/TopLeftBar";

export function RightChapter(props) {
  const projects = [
    { id: 29, key: "a", label: "PL_3D_14/5_2024", link: "" },
    { id: 28, key: "b", label: "FR_3D_GToBC_2024", link: "" },
    { id: 27, key: "c", label: "FR_ARCH_POM_2024", link: "" },
    { id: 26, key: "d", label: "PL_URB_KAT_2024", link: "" },
    { id: 25, key: "e", label: "FR_ARCH_CONC_2024", link: "" },
  ];

  const events = [
    { id: 8, key: "a", label: "Stretching 10.10–11.11.2024", link: "" },
    { id: 9, key: "b", label: "Belgrade 23.06–30.06.2024", link: "" },
    { id: 10, key: "c", label: "Adrian Zert 09.03–04.04.2024", link: "" },
    { id: 11, key: "d", label: "14by5 23.02–03.03.2024", link: "" },
  ];

  return (
    <>
      <div className={styles.rightChapterWithTopMargin}>
        <TopLeftBar firstText={props.chapters[0].label} />
        <InsideChapter>
          <BottomBar>
            <p>recent</p>
          </BottomBar>
        </InsideChapter>
      </div>
      <div className={styles.rightChapter}>
        <TopRightBar
          firstText={props.chapters[1].label}
          marginLeft="1.5rem"
          name={`project${props.chapters[1].id}Chapter`}
          onMouseMove={props.onMouseMove}
        />
        <InsideChapter>
          <ul>
            {projects.map((project) => {
              return (
                <li key={project.key} name={`project${project.id}LI`}>
                  {project.id}
                  <NavLink
                    className={styles.rightChapterNavLink}
                    to={project.link}
                    name={`project${project.id}NavLink`}
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
          onMouseMove={props.onMouseMove}
        />
        <InsideChapter>
          <ul>
            {events.map((oltevent) => {
              return (
                <>
                  <li key={oltevent.key} name={`oltevent${oltevent.id}LI`}>
                    <NavLink
                      className={styles.rightOltEventLink}
                      to={oltevent.link}
                    >
                      {oltevent.label}
                    </NavLink>
                  </li>
                </>
              );
            })}
          </ul>
        </InsideChapter>
      </div>
      <div className={styles.rightChapter}>
        <TopRightBar
          firstText={props.chapters[3].label}
          marginLeft="1.5rem"
          onMouseMove={props.onMouseMove}
          name={`project${props.chapters[3].id}Chapter`}
        />
        <div className={styles.rightChapterComingSoon}>coming soon...</div>
      </div>
    </>
  );
}
