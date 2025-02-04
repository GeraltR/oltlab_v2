import styles from "./TopCenterBar.module.css";

export function TopCenterBar(props) {
  return (
    <div className={styles.topCenterBar}>
      <p className={styles.topCenterBarWithMarginLeft}>{props.firstText}</p>
      <div className={styles.topCenterBarJustifyCenter}>{props.secondText}</div>
    </div>
  );
}
