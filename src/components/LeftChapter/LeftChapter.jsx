import { TopLeftBar } from "../TopLeftBar/TopLeftBar";
import { BottomBar } from "../BottomBar/BottomBar";
import styles from "./LeftChapter.module.css";
import { InsideChapter } from "../InsideChapter/InsideChapter";
import { SVGPolishFlag } from "../svgPolishFlag/svgPolishFlag";
import SvgFranceFlag from "../SvgFranceFlag/SvgFranceFlag";
import { NavLink } from "react-router-dom";

export function LeftChapter(props) {
  return (
    <>
      <div className={styles.leftChapterWithTopMargin}>
        <TopLeftBar
          firstText={props.chapters[0].label}
          name={`project${props.chapters[0].id}Chapter`}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        />
        <InsideChapter>
          <BottomBar>
            <p>contact</p>
          </BottomBar>
        </InsideChapter>
      </div>
      <div className={styles.leftChapter}>
        <TopLeftBar
          chapter={props.chapters[1].key}
          firstText={props.chapters[1].label}
          marginLeft="1.5rem"
          name={`project${props.chapters[1].id}Chapter`}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        />
        <InsideChapter>
          <ul>
            <li>
              <NavLink>hello@oltlab.net</NavLink>
            </li>
            <li>
              <SvgFranceFlag />
              +33 762 716 212
            </li>
            <li>
              <SVGPolishFlag /> +48 603 511 126
            </li>
          </ul>
        </InsideChapter>
      </div>
      <div className={styles.leftChapter}>
        <TopLeftBar
          chapter={props.chapters[2].key}
          firstText={props.chapters[2].label}
          marginLeft="1.5rem"
          name={`project${props.chapters[2].id}Chapter`}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        />
      </div>
      <div className={styles.leftChapter}>
        <TopLeftBar
          chapter={props.chapters[3].key}
          firstText={props.chapters[3].label}
          marginLeft="1.5rem"
          name={`project${props.chapters[3].id}Chapter`}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        />
        <div className={styles.leftChapterBottomLeft}>all rights reserved</div>
      </div>
    </>
  );
}
