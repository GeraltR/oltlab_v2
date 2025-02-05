import styles from "./TopLeftBar.module.css";

export function TopLeftBar(props) {
  return (
    <div
      className={styles.topLeftBar}
      style={{ marginLeft: `${props.marginLeft}` }}
    >
      {props.firstText}
    </div>
  );
}
