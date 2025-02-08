import styles from "./TopRightBar.module.css";

export function TopRightBar(props) {
  return (
    <div
      className={styles.topRightBar}
      style={{ marginLeft: `${props.marginLeft}` }}
    >
      {props.firstText}
    </div>
  );
}
