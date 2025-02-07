import styles from "./TopLeftBar.module.css";

export function TopLeftBar(props) {
  return (
    <div
      className={styles.topLeftBar}
      style={{ marginLeft: `${props.marginLeft}` }}
      id={props.name}
      onMouseMove={props.onMouseMove}
    >
      {props.firstText}
    </div>
  );
}
