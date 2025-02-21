import { TopLeftBar } from "../TopLeftBar/TopLeftBar";
import styles from "./LeftChapter.module.css";
import { InsideChapter } from "../InsideChapter/InsideChapter";
import { SVGPolishFlag } from "../svgPolishFlag/svgPolishFlag";
import SvgFranceFlag from "../SvgFranceFlag/SvgFranceFlag";
import { NavLink } from "react-router-dom";

export function LeftChapter(props) {
  return (
    <>
      <div className={styles.leftChapterWithTopMargin}>
        <div style={{ marginLeft: "1.5rem" }} id={props.name}>
          {props.chapters[0].label}
        </div>
      </div>
      <div className={styles.leftChapter}>
        <TopLeftBar
          chapter={props.chapters[1].key}
          firstText={props.chapters[1].label}
          marginLeft="1.5rem"
          linkTo={props.chapters[1].linkTo}
          name={`project${props.chapters[1].id}Chapter`}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        />
        <InsideChapter>
          <p>contact</p>
          <ul>
            <li>
              <NavLink to="mailto:hello@oltlab.net">hello@oltlab.net</NavLink>
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
          linkTo={props.chapters[2].linkTo}
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
          linkTo={props.chapters[3].linkTo}
          name={`project${props.chapters[3].id}Chapter`}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        />
      </div>
    </>
  );
}
