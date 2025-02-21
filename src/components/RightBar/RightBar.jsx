import styles from "./RightBar.module.css";

export function RightBar(props) {
  return (
    <div
      className={`${
        props.isMobileDevice ? styles.rightBarMobile : styles.rightBar
      }`}
      style={{ filter: `${props.isBlur ? "blur(4px)" : "blur(0)"}` }}
    >
      <div className={styles.rightBarTop}>{props.topText}</div>

      <div
        className={`${
          props.isMobileDevice
            ? styles.rightBarBottomMobile
            : styles.rightBarBottom
        }`}
      >
        {props.bottomText}
      </div>
    </div>
  );
}
