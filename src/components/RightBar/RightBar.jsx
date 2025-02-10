import styles from "./RightBar.module.css";

export function RightBar(props) {
  return (
    <div
      className={`${props.isMobileDevice} ? ${styles.rightBarMobile} : ${styles.rightBar}`}
    >
      <div className={styles.rightBarTop}>{props.topText}</div>

      <div
        className={`${props.isMobileDevice} ? ${styles.rightBarBottomMobile} : ${styles.rightBarBottom}`}
      >
        {props.bottomText}
      </div>
    </div>
  );
}
