import styles from "./LeftBar.module.css";

export function LeftBar(props) {
  return <div className={styles.leftBar}>{props.chapter}</div>;
}
