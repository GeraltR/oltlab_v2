import styles from "./LeftBar.module.css";

export function LeftBar(props) {
  return (
    <div className={styles.leftBar}>
      <p id={props.name} onMouseMove={props.onMouseMove}>
        {props.chapter}
      </p>
    </div>
  );
}
