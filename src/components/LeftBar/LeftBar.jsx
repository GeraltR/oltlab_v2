import styles from "./LeftBar.module.css";

export function LeftBar(props) {
  return (
    <div
      className={styles.leftBar}
      id={props.name}
      onMouseMove={props.onMouseMove}
    >
      <p>{props.chapter}</p>
    </div>
  );
}
