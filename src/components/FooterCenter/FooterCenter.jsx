import styles from "./FooterCenter.module.css";

export function FooterCenter() {
  return (
    <>
      <div className={styles.logooltlabCenter}>
        <div>
          <div className={styles.logoInsideLeft}>Kattowitz, SI</div>
          <div className={styles.logoInsideRight}>| Paris FR</div>
        </div>
        <div>
          <div className={styles.logoInsideLeftItalic}>olt.lab</div>
          <div className={styles.logoInsideRight}>| 2025</div>
        </div>
      </div>
    </>
  );
}
