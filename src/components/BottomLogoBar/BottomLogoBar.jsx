import styles from "./BottomLogoBar.module.css";

export function BottomLogoBar({ children }) {
  return <div className={styles.bottomLogoBar}>{children}</div>;
}
