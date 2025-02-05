import styles from "./BottomBar.module.css";

export function BottomBar({ children }) {
  return <div className={styles.bottomBar}>{children}</div>;
}
