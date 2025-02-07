import { LeftBar } from "../LeftBar/LeftBar";
import { TopLeftBar } from "../TopLeftBar/TopLeftBar";
import { BottomBar } from "../BottomBar/BottomBar";
import styles from "./LeftChapter.module.css";
import { InsideChapter } from "../InsideChapter/InsideChapter";
import { SVGPolishFlag } from "../svgPolishFlag/svgPolishFlag";
import SvgFranceFlag from "../SvgFranceFlag/SvgFranceFlag";

export function LeftChapter(props) {
  return (
    <>
      <div className={styles.leftChapterWithTopMargin}>
        <TopLeftBar firstText={props.chapters[0].label} />
        <InsideChapter>
          <BottomBar>
            <p>contact</p>
          </BottomBar>
        </InsideChapter>
      </div>
      <div className={styles.leftChapter}>
        <LeftBar chapter={props.chapters[1].key} />
        <TopLeftBar firstText={props.chapters[1].label} marginLeft="1.5rem" />
        <InsideChapter>
          <ul>
            <li>hello@oltlab.net</li>
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
        <LeftBar chapter={props.chapters[2].key} />
        <TopLeftBar firstText={props.chapters[2].label} marginLeft="1.5rem" />
      </div>
      <div className={styles.leftChapter}>
        <LeftBar chapter={props.chapters[3].key} />
        <TopLeftBar firstText={props.chapters[3].label} marginLeft="1.5rem" />
      </div>
    </>
  );
}
