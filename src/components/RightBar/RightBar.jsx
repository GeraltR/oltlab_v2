import styles from "./RightBar.module.css";

export function RightBar(props) {
  return (
    <div className={styles.rightBar}>
      <div className={styles.rightBarTop}>{props.topText}</div>
      <div className={styles.rightBarBottomLeft}>{props.bottomTextLeft}</div>
      <div className={styles.rightBarBottom}>{props.bottomText}</div>
    </div>
  );
}
