import { NavLink } from "react-router-dom";
import styles from "./TopRightBar.module.css";

export function TopRightBar(props) {
  return (
    <>
      <NavLink
        className={styles.topRightBar}
        style={{ marginLeft: `${props.marginLeft}` }}
        id={props.name}
        onMouseMove={props.onMouseMove}
      >
        {props.firstText}
      </NavLink>
    </>
  );
}
