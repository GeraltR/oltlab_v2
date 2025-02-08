import { NavLink } from "react-router-dom";
import styles from "./TopLeftBar.module.css";

export function TopLeftBar(props) {
  return (
    <div className={styles.leftBar}>
      <NavLink
        className={styles.topLeftBar}
        style={{ marginLeft: `${props.marginLeft}` }}
        to={props.linkTo}
        id={props.name}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        <div id={props.name}>{props.chapter}</div>
        <div className={styles.topLeftBarChapter} id={props.name}>
          {props.firstText}
        </div>
      </NavLink>
    </div>
  );
}
