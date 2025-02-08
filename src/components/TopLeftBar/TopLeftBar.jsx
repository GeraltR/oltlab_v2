import { NavLink } from "react-router-dom";
import styles from "./TopLeftBar.module.css";

export function TopLeftBar(props) {
  return (
    <>
      <div className={styles.leftBar}>
        <NavLink
          to={props.linkTo}
          id={props.name}
          onMouseMove={props.onMouseMove}
        >
          {props.chapter}
        </NavLink>
        <NavLink
          className={styles.topLeftBar}
          style={{ marginLeft: `${props.marginLeft}` }}
          id={props.name}
          onMouseMove={props.onMouseMove}
        >
          {props.firstText}
        </NavLink>
      </div>
    </>
  );
}
