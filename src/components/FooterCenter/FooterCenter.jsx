import styles from "./FooterCenter.module.css";
import logo from "../../assets/img/logooltlab.png";

export function FooterCenter() {
  return (
    <>
      <div className={styles.logooltlabCenter}>
        <div>
          <div className={styles.logoInsideLeft}>Kattowitz, SI</div>
          <div className={styles.logoInsideRight}>| Paris FR</div>
        </div>
        <div>
          <div className={styles.logoInsideLeft}>
            <img src={logo} />
          </div>
          <div className={styles.logoInsideRight}>| 2025</div>
        </div>
      </div>
    </>
  );
}
