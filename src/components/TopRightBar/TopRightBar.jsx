import styles from "./TopRightBar.module.css";

export function TopRightBar(props) {
  return (
    <div
      className={styles.topRightBar}
      style={{ marginLeft: `${props.marginLeft}` }}
      id={props.name}
      onMouseMove={props.onMouseMove}
    >
      {props.firstText}
    </div>
  );
}
