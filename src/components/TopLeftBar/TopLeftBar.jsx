import { NavLink } from "react-router-dom";
import styles from "./TopLeftBar.module.css";

export function TopLeftBar(props) {
  return (
    <>
      <div className={styles.leftBar}>
        <NavLink
          className={styles.topLeftBar}
          style={{ marginLeft: `${props.marginLeft}` }}
          to={props.linkTo}
          id={props.name}
          onMouseMove={props.onMouseMove}
        >
          <div>{props.chapter}</div>
          <div className={styles.topLeftBarChapter}>{props.firstText}</div>
        </NavLink>
      </div>
    </>
  );
}
